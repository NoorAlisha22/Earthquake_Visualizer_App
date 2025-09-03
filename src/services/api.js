// src/services/api.js
export const fetchEarthquakes = async (timeRange = "all_week") => {
  try {
    const res = await fetch(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${timeRange}.geojson`
    );
    const data = await res.json();
    return data.features;
  } catch (error) {
    console.error('Error fetching earthquakes:', error);
    return [];
  }
};
