import { useState, useEffect } from 'react';
import '../css/Timeline.css';

type TimelineEvent = {
  title: string;
  description: string;
  location: string;
  scriptureRef: string;
};

type ApiResponse = {
  events: TimelineEvent[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalEvents: number;
    totalPages: number;
  };
};

function Timeline({ timePeriodId }: { timePeriodId: number }) {
  const [event, setEvent] = useState<TimelineEvent | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const baseUrl =
    'https://paul-project-backend-b6b4cufec9hdepan.eastus-01.azurewebsites.net';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/paul/events?time_period_id=${timePeriodId}&page=${page}&pageSize=1`,
          { credentials: 'include' }
        );
        const data: ApiResponse = await res.json();

        setEvent(data.events[0]);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error('Failed to fetch event data:', error);
      }
    };

    fetchData();
  }, [timePeriodId, page]);

  const next = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prev = () => setPage((prev) => Math.max(prev - 1, 1));

  const progress = totalPages > 1 ? ((page - 1) / (totalPages - 1)) * 100 : 0;

  if (!event) return <p>Loading...</p>;

  console.log(
    `Page: ${page}, TotalPages: ${totalPages}, Progress: ${(page / totalPages) * 100}`
  );

  return (
    <div className="timeline-wrapper">
      <div className="timeline-card">
        <h2>{event.title}</h2>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>{event.description}</p>
        <p>
          <em>{event.scriptureRef}</em>
        </p>

        <div className="timeline-buttons">
          <button onClick={prev} disabled={page === 1}>
            ⬅ Back
          </button>
          <button onClick={next} disabled={page === totalPages}>
            Next ➡
          </button>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default Timeline;
