import '../css/Image.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">The Journeys of Paul</h1>

      <p className="home-description">
        Paul was a true servant of the Lord, Jesus Christ. He was willing to give up everything to follow the Savior and
        give others the opportunity to come unto Him. Paul is inspiring to me because as you read his words, you realize
        that he, too, is human. Each of us has our flaws and follies, but that doesn't mean we can't serve the Savior.
      </p>

      <div className="image-container">
        <img src="/paul_journeys.webp" alt="Map of the journeys of Paul" />
      </div>
    </div>
  );
}

export default Home;
