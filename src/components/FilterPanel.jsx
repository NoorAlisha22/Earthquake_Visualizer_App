export default function FilterPanel({ minMag, setMinMag, timeRange, setTimeRange, error, noResults }) {
  const handleMinMagnitudeChange = (e) => {
    setMinMag(parseFloat(e.target.value));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label htmlFor="min-magnitude">Min Magnitude:</label>
        <input
          type="range"
          id="min-magnitude"
          value={minMag}
          onChange={handleMinMagnitudeChange}
          min="0"
          max="10"
          step="0.1"
        />
         <span>{minMag}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label htmlFor="time-range">Time Range:</label>
        <select
          id="time-range"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="all_week">Past 7 Days</option>
          <option value="all_day">Past 24 Hours</option>
          <option value="all_hour">Past Hour</option>
        </select>
      </div>
 
      {error && (
        <div style={{ color: "red", flexBasis: "100%" }}>{error}</div>
      )}
      {noResults && !error && (
        <div style={{ color: "#555", flexBasis: "100%" }}>
          No earthquakes found for the selected filters.
        </div>
      )}
    </div>
  );
}