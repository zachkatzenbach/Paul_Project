import AuthorizeView from '../components/AuthorizeView';
import Timeline from '../components/Timeline';

function JourneyToRome() {
  return (
    <>
      <AuthorizeView>
        <h1>Paul's Journey to Rome</h1>
        <div className="image-container">
          <img src="/agrippa.jpg" />
        </div>
        <Timeline timePeriodId={5} />
      </AuthorizeView>
    </>
  );
}
export default JourneyToRome;
