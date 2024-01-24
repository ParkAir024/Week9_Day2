import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

export default function Location() {
    
    const [nextLocation, setNextLocation] = useState('Tokyo');
    const [selectedLocations, setSelectedLocations] = useState([]);

    const locations = [
        'Hokkaido',
        'Fukuoka',
        'Nagoya',
        'Kobe',
        'Sapporo',
        'Nara',
        'Okinawa',
        'Kumamoto',
        'Osaka',
        'Kyoto',
        'Hiroshima',
        'Sendai',
        'Yokohama',
        'Kanazawa',
        'Nagasaki',
        'Miyazaki'
    ];
    
    function randomLocation() {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const newLocation = locations[randomIndex];

        const updatedLocations = [...locations.slice(0, randomIndex), ...locations.slice(randomIndex + 1)];

        setNextLocation(newLocation);
    }

    function addSelectedLocation() {
        if (nextLocation) {
            setSelectedLocations(prevLocations => [...prevLocations, nextLocation]);
        }
    }

    return (
        <Container>
            <h3>The next Adventure!</h3>
            <p onClick={addSelectedLocation} style={{ cursor: 'pointer' }}>Location: {nextLocation}</p>
            <button onClick={randomLocation}>Spin The Wheel</button>

            <div>
                <h4>Selected Locations:</h4>
                <ul>
                    {selectedLocations.map((location, index) => (
                        <li key={index}>{location}</li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}
