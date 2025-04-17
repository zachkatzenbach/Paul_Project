import AuthorizeView from '../components/AuthorizeView';
import Timeline from '../components/Timeline';

function FirstMission() {
  return (
    <>
      <AuthorizeView>
        <h1>Paul's First Mission</h1>
        <p>
          <strong>Area: </strong> Galatia
        </p>
        <p>
          <strong>Companion: </strong> Barnabas
        </p>
        <p>
          <strong>When: </strong> 46-48 AD
        </p>
        <p>
          <strong>Center: </strong> Antioch
        </p>
        <div className="image-container">
          <img src="/heal_cripple.gif" />
        </div>
        <Timeline timePeriodId={2} />
      </AuthorizeView>
    </>
  );
}
export default FirstMission;
