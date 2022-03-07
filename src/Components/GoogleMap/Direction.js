import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from "@react-google-maps/api";

const Direction = ({origin, destination}) => {
  const [directionResponse, setDirectionResponse] = useState(null);
    const containerStyle = {
        // width: "400px",
        height: "400px",
      };
      const position = {
        lat: 23.810331,
        lng: 90.412521,
      };
    
      return (
        <div>
          <LoadScript googleMapsApiKey="AIzaSyAuZspjTDqkKWR1HOL7CGfrldPOm6XtITU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={10}
            >
                 {
              // (
                destination !== '' &&
                origin !== ''
              // ) 
              &&
              //  (
                <DirectionsService
                  // required
                  options={{
                    destination:destination,
                    origin: origin,
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res => {
                    if(res !== null){
                      setDirectionResponse(res);
                    }
                  }}
                  
                />
              // )
            }
            {
              directionResponse && (
                <DirectionsRenderer
                  // required
                  options={{
                    directions: directionResponse
                  }}                 
                />
              )
            }
            </GoogleMap>
          </LoadScript>
        </div>
      );
};

export default Direction;