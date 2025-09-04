# Earthquake Visualizer 🌍🌐

A fully responsive web application that visualizes real-time earthquakes worldwide on an interactive map. Built with React and Leaflet, this app allows users to explore, filter, and analyze earthquake events with a clean and user-friendly interface. Optimized for both desktop and mobile screens, it offers multiple map styles, color-coded earthquake markers, and advanced interactive features.

## Features ✨

Interactive Map: 

  -Pan, zoom, and explore earthquakes globally.

  -Leaflet zoom controls integrated for easy navigation.

  -Three map styles: OpenStreetMap, Satellite, and Dark Mode.

Search Functionality:

  -Search bar with animated search button.

  -Search earthquakes by place or region.

Filters & Controls:

  -Minimum Magnitude Slider with the current value displayed.

  -Time Range Dropdown: Past 24 hours, past 7 days, and past hours.

Earthquake Markers:

  -Color-coded markers indicating intensity (Green → Yellow → Orange → Red).

  -Recent earthquakes (past 24 hours) highlighted with pulsing dark red markers.

  -Popups display detailed information about each earthquake.

Clustering & Performance:

  -Efficient marker clustering ensures smooth interaction even with large datasets.

Legend & Footer:

  -Color bars indicate earthquake intensity ranges.

  -Footer provides additional information and branding.

Fully Responsive:
  -Optimized for desktop and mobile screens without losing functionality or readability.

## Tech Stack 🛠️

Frontend: React, Leaflet, React-Leaflet, React-Leaflet-MarkerCluster

Styling: CSS, animations

API: USGS Earthquake API

Map Tiles: OpenStreetMap, Satellite imagery, dark theme

## Folder Structure 📁

Earthquake_Visualizer_App/

│

├─ node_modules/           # Node dependencies

├─ public/                 # Public assets

├─ src/                    # Source files

│   ├─ assets/  
           
│   ├─ components/         # React components

│   │   ├─ FilterPanel.jsx

│   │   ├─ Footer.jsx

│   │   ├─ MapStyleToggler.jsx

│   │   ├─ MapView.jsx

│   │   └─ SearchBar.jsx

│   │

│   ├─ services/           # API calls

│   │   └─ api.js

│   │

│   ├─ App.jsx             # Main App component

│   ├─ index.css         # Global CSS

│   └─ main.jsx            # App initialization

│

├─ .gitignore          

├─ eslint.config.js        # Linting configuration

├─ index.html              # Main HTML file

├─ package-lock.json

├─ package.json

├─ README.md               # Project documentation

└─ vite.config.js          # Build configuration


## Installation 🚀

Clone the repository:
```bash
git clone https://github.com/your-username/earthquake-visualizer.git
cd earthquake-visualizer
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The app will run at http://localhost:3000.

## Usage 🎯

Adjust filters: Use the minimum magnitude slider and time range dropdown to refine earthquake data.

Search: Type a location and click the animated search button to zoom into that region.

Change map style: Toggle between OpenStreetMap, Satellite, or Dark Mode.

Explore earthquakes: Click on markers to view detailed popups with earthquake information.

Observe recent activity: Pulsing darkred markers highlight earthquakes that occurred in the past 24 hours.

Legend: Color-coded bars indicate earthquake intensity ranges.

## Notes ⚠️

Data is fetched live from the USGS Earthquake API.

Ensure internet connectivity to fetch earthquake data.

Supports React 19 and Leaflet v5.

Fully responsive design works on both desktop and mobile devices.

