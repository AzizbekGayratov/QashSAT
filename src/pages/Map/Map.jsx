import Badge from "../../components/Badge";
import Card from "../../components/Card";

function Map() {
  return (
    <main className="map-page">
      <aside className="map-sidebar">
        <Badge>QashqaMap</Badge>
        <button className="map-nav active">⌖ <span>Map</span></button>
        <button className="map-nav">⌁ <span>Analytics</span></button>
        <button className="map-nav">▤ <span>Reports</span></button>
        <button className="map-nav">⚙ <span>Settings</span></button>
        <div className="map-legend"><strong>Legend</strong><span><i className="dot healthy" /> Healthy</span><span><i className="dot moderate" /> Moderate</span><span><i className="dot stressed" /> Stressed</span></div>
      </aside>
      <section className="map-workspace">
        <div className="map-toolbar"><div className="map-search">⌕ &nbsp; Shahrisabz, Kashkadarya</div><span className="offline-dot" /> Offline mode</div>
        <div className="map-canvas">
          <div className="field field-one" /><div className="field field-two" /><div className="field field-three" /><div className="field field-four" />
          <div className="map-roads" /><button className="map-marker marker-a">●</button><button className="map-marker marker-b">●</button>
          <div className="layers-panel"><strong>Layers</strong><span>✓ NDVI Crop Health -</span><span>✓ Water Stress -</span><span>✓ Irrigation &amp; Canals -</span><span>□ Road Conditions -</span><span>□ Infrastructure -</span><span>✓ Sensor Stations -</span><hr /><strong>Crop Health (NDVI)</strong><small><i className="dot healthy" /> Healthy</small><small><i className="dot moderate" /> Early Stress</small><small><i className="dot stressed" /> High Stress</small></div>
          <Card className="field-detail"><span>FIELD #23</span><h3>NDVI: 0.42 <b>Water Stress</b></h3><p>Soil Moisture: 18%</p><p>Last Update: 2025-05-14</p><button>View Details →</button></Card>
          <div className="map-zoom"><button>+</button><button>−</button><button>⌘</button></div>
        </div>
      </section>
    </main>
  );
}

export default Map;
