using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaulProject.Data;

namespace PaulProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaulController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PaulController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("events")]
        public async Task<IActionResult> GetEvents(
            [FromQuery] int time_period_id,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 1)
        {
            if (page < 1 || pageSize < 1)
                return BadRequest("Page and pageSize must be greater than 0");

            var events = await _context.Set<Event>()
                .Where(e => e.TimePeriodId == time_period_id)
                .OrderBy(e => e.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            var total = await _context.Set<Event>()
                .CountAsync(e => e.TimePeriodId == time_period_id);

            return Ok(new
            {
                events,
                pagination = new
                {
                    currentPage = page,
                    pageSize,
                    totalEvents = total,
                    totalPages = (int)Math.Ceiling(total / (double)pageSize)
                }
            });
        }
    }
}