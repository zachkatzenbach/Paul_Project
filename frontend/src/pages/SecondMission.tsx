import AuthorizeView from '../components/AuthorizeView';
import Timeline from '../components/Timeline';

function SecondMission() {
  return (
    <>
      <AuthorizeView>
        <h1>Paul's Second Mission</h1>
        <p>
          <strong>Center: </strong> Corinth
        </p>
        <p>
          <strong>Companions: </strong> Silas, Luke, and Timothy
        </p>
        <p>
          <strong>When: </strong> 50-54 AD
        </p>
        <div className="image-container">
          <img src="/unknown_god.jpeg" />
        </div>
        <Timeline timePeriodId={3} />
      </AuthorizeView>
    </>
  );
}
export default SecondMission;
