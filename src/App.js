import './App.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import React from "react";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const polyline = [
  [40.8099, -73.961],
  [40.80965, -73.9604],
  [40.80929, -73.96064],
  [40.80953, -73.96124],
  [40.8099, -73.961]
]

const redOptions = { color: 'red' }

function App() {
  return (
    <MapContainer
      center={[40.80959, -73.96082]}
      zoom={19}
      style={{ height: "800px"}}

    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.80959, -73.96082]}>
        <Popup>
          This is CEPSR. <br /> Nice!
        </Popup>
      </Marker>
      <Marker position={[40.80935, -73.95993]}>
        <Popup>
          This is Mudd.
        </Popup>
      </Marker>


      <Polygon positions={polyline} color="red"/>
    </MapContainer>
  );
}

export default App;
