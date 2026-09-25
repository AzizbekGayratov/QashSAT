import Card from "../../components/Card";

function About() {
  return (
    <main className="container page-section page-shell">
      <p className="section-label">THE MISSION</p>
      <h1>From <span>space</span> to the field.</h1>
      <p className="lead">QashqaSat makes environmental information easier to understand and act on by bringing satellite imagery, field observations, and sensor data together.</p>
      <Card><h2>Built for local decisions</h2><p>Use this page as the home for your project story, methodology, and team details as the product grows.</p></Card>
    </main>
  );
}

export default About;
