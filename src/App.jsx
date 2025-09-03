import { useEffect, useState } from 'react';
import MapView from './components/MapView';
import FilterPanel from './components/FilterPanel';
import { fetchEarthquakes } from './services/api';
import './index.css';
import SearchBar from './components/SearchBar';
import MapStyleToggle from "./components/MapStyleToggle";
import Footer from './components/Footer';


function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [minMag, setMinMag] = useState(0);
  const [timeRange, setTimeRange] = useState("all_week");
  const [searchCenter, setSearchCenter] = useState(null);
  const [mapStyle, setMapStyle] = useState("osm");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEarthquakes = async () => {
      try {
        setError(null);
        const data = await fetchEarthquakes(timeRange);
        setEarthquakes(data);
      } catch (err) {
        setError("Network error: Unable to fetch earthquake data.");
        setEarthquakes([]);
      }
    };
    loadEarthquakes();
  }, [timeRange]);

  const filtered = earthquakes.filter((eq) => eq.properties.mag >= minMag);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
          <SearchBar onSearch={setSearchCenter} />
          <FilterPanel
            minMag={minMag}
            setMinMag={setMinMag}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            error={error}
            noResults={!error && filtered.length === 0}
          />
        </div>
        <MapStyleToggle mapStyle={mapStyle} setMapStyle={setMapStyle} />
      </div>
      <div className="app-flex">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <MapView
            earthquakes={filtered}
            searchCenter={searchCenter}
            mapStyle={mapStyle}
            error={error}
            noResults={!error && filtered.length === 0}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;