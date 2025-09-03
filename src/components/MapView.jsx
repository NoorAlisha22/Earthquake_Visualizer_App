// src/components/MapView.jsx
import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-markercluster";

function ChangeView({ center }) {
  const map = useMap();
  if (center) {
    map.setView(center, 6); 
  }
  return null;
}

export default function MapView({ earthquakes, searchCenter, mapStyle, error, noResults }) {
  const getColor = (mag) => (mag > 5 ? "red" : mag > 3 ? "orange" : "yellow");

  const tileLayers = {
    osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  };

  const now = Date.now();

  if (error) {
    return <div style={{ padding: 24, color: "red", textAlign: "center" }}>{error}</div>;
  }

  if (noResults) {
    return <div style={{ padding: 24, color: "#555", textAlign: "center" }}>No earthquakes found for the selected filters.</div>;
  }

  return (
    <div style={{ display: "flex", flex: 1 }}>
      {/* Map */}
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ flex: 1, minHeight: 0 }}
        zoomControl={false} 
      >
        <ZoomControl position="topright" />

        <TileLayer url={tileLayers[mapStyle]} />

        {searchCenter && <ChangeView center={searchCenter} />}

        <MarkerClusterGroup chunkedLoading>
          {earthquakes.map((eq) => {
            const isRecent = now - eq.properties.time < 86400000; 
            return (
              <CircleMarker
                key={eq.id}
                center={[eq.geometry.coordinates[1], eq.geometry.coordinates[0]]}
                radius={Math.max(eq.properties.mag * 2, 4)}
                color={getColor(eq.properties.mag)}
                className={isRecent ? "pulse" : ""}
              >
                <Popup>
                  <div>
                    <strong>{eq.properties.place}</strong>
                    <p>Magnitude: {eq.properties.mag}</p>
                    <p>Time: {new Date(eq.properties.time).toLocaleString()}</p>
                    {isRecent && <p style={{ color: "red" }}>⚡ Recent Earthquake!</p>}
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
