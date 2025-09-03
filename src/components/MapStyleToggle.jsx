export default function MapStyleToggle({ mapStyle, setMapStyle }) {
  return (
    <div className="map-style-toggle">
      <label>Map Style: </label>
      <select value={mapStyle} onChange={(e) => setMapStyle(e.target.value)}>
        <option value="osm">OpenStreetMap</option>
        <option value="satellite">Satellite</option>
        <option value="dark">Dark Mode</option>
      </select>
    </div>
  );
}
