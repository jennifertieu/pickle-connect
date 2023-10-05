import MapboxMap from "../components/mapbox-map";

export default function MapBox() {
  return (
    <div>
      <div>
        <h1 className="header">Mapbox API</h1>
        <p className="">MapBox should show here if this is correct</p>
      </div>
      <div>
        <MapboxMap />
      </div>
    </div>
  );
}
