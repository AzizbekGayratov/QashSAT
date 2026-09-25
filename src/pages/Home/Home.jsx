import Button from "../../components/Button";
import Card from "../../components/Card";

const features = [
  ["◌", "Crop Health", "Monitor vegetation and field stress early."],
  ["♧", "Water & Irrigation", "Check water coverage and canal status."],
  ["△", "Rural Infrastructure", "Report roads and village conditions."],
  ["▣", "Offline Access", "Use the app even without internet."],
];

function Home() {
  return (
    <main>
      <section className="page-hero home-hero">
        <div className="hero-glow" />
        <div className="container page-hero-content ">
          <p className="eyebrow">SATELLITE INTELLIGENCE · SHAHRISABZ</p>
          <h1>Smarter monitoring<br />for a <span>greener future</span></h1>
          <p>QashqaSat combines satellite data and local observations to help communities understand crop health, water availability, and rural infrastructure.</p>
          <div className="hero-actions">
            <Button to="/map">Explore the Map <span>→</span></Button>
            <Button to="/about" variant="secondary">Learn More</Button>
          </div>
        </div>
        <div className="satellite-art" aria-hidden="true">
          <div className="satellite-orbit satellite-orbit-one" />
          <div className="satellite-orbit satellite-orbit-two" />
          <div className="satellite-body-art"><i /><b /><em /></div>
          <div className="data-chip data-chip-one">NDVI <strong>0.72</strong></div>
          <div className="data-chip data-chip-two">WATER STRESS <strong>LOW</strong></div>
        </div>
      </section>
      <section className="container page-section">
        <div className="feature-bar">
          {features.map(([icon, title, description]) => <Card key={title} className="feature-item"><span className="feature-icon">{icon}</span><div><h2>{title}</h2><p>{description}</p></div></Card>)}
        </div>
      </section>
    </main>
  );
}

export default Home;
