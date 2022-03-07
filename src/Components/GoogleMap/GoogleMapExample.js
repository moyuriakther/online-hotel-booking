import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapExample = () => {
  const containerStyle = {
    // width: "400px",
    height: "400px",
  };
  const position = {
    lat: 23.810331,
    lng: 90.412521,
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAuZspjTDqkKWR1HOL7CGfrldPOm6XtITU">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={10}
        >
          <Marker onLoad={onLoad} position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapExample;
