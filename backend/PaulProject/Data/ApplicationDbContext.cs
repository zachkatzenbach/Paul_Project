using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PaulProject.Data;

public class ApplicationDbContext : IdentityDbContext<IdentityUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

    public DbSet<Event> Events { get; set; }
    public DbSet<TimePeriod> TimePeriods { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<TimePeriod>().HasData(
            new TimePeriod { TimePeriodId = 1, TimePeriodName = "Pre-Conversion" },
            new TimePeriod { TimePeriodId = 2, TimePeriodName = "First Missionary Journey" },
            new TimePeriod { TimePeriodId = 3, TimePeriodName = "Second Missionary Journey" },
            new TimePeriod { TimePeriodId = 4, TimePeriodName = "Third Missionary Journey" },
            new TimePeriod { TimePeriodId = 5, TimePeriodName = "Journey to Rome" }
        );
    }
}
