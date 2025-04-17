import AuthorizeView from '../components/AuthorizeView';
import Timeline from '../components/Timeline';
import '../css/Image.css';

function PreConversion() {
  return (
    <>
      <AuthorizeView>
        <h1>Pre-Conversion</h1>
        <p>
          {' '}
          <strong>Key Point: </strong>
          Saul's name was never "changed" to Saul. Paul was simply the Roman
          version of his name and Saul was the Hebrew version of his name.
        </p>
        <div className="image-container">
          <img src="/vision.gif" />
        </div>
        <Timeline timePeriodId={1} />
      </AuthorizeView>
    </>
  );
}
export default PreConversion;
