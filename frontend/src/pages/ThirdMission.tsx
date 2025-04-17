import AuthorizeView from '../components/AuthorizeView';
import Timeline from '../components/Timeline';

function ThirdMission() {
  return (
    <>
      <AuthorizeView>
        <h1>Paul's Third Journey</h1>
        <div className="image-container">
          <img src="/eutychus.jpg" />
        </div>
        <Timeline timePeriodId={4} />
      </AuthorizeView>
    </>
  );
}
export default ThirdMission;
