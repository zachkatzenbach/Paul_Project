namespace PaulProject.Data
{
    public class TimePeriod
    {
        public int TimePeriodId { get; set; }
        public string TimePeriodName { get; set; }

        public ICollection<Event> Events { get; set; }
    }
}
