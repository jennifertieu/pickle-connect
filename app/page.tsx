import AuthForm from "./components/AuthForm";
import MapboxMap from "./components/MapBoxMap";

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Landing Page</h1>
        <p className=""></p>
      </div>
      <div className="col-6 auth-widget">
        {/* <AuthForm />  Will bring back later. */}
        <MapboxMap />
      </div>
    </div>
  );
}
