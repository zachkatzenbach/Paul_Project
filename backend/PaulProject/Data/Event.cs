using System.ComponentModel.DataAnnotations.Schema;

namespace PaulProject.Data
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        [Column("scripture_ref")]
        public string ScriptureRef { get; set; }

        [ForeignKey("time_period_id")]
        [Column("time_period_id")]
        public int TimePeriodId { get; set; }
        public TimePeriod TimePeriod { get; set; }
    }
}
