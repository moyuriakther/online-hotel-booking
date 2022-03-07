import React, { useState } from 'react';
import Direction from './Direction';

const Map = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    return (
        <div>
            <input type="text" placeholder="Start From" onBlur={e => setOrigin(e.target.value)}/> <br />
            <input type="text" placeholder="End To" onBlur={e => setDestination(e.target.value)}/> <br />
            <Direction origin={origin} destination = {destination}/>
        </div>
    );
};

export default Map;