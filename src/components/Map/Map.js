import React, { useState, useCallback }  from 'react';
import GoogleMapReact from 'google-map-react';
import Countries from '../../countries.json';
import Marker from '../Marker';
import Card from '../Card';

import styles from './Map.module.css';

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = ({ center, zoom, countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const onClick = useCallback(() => ({ lat, lng, x, y, event }) => {
        setSelectedCountry(null);
    }, []);

    const onCircleClick = (country, lat, lng) => {
        setTimeout(() => {
            setSelectedCountry({
                country,
                lat,
                lng
            });
        });
    };

    const getConfirmedInfectionsCircleSize = country => {
        return 0.005 * country.mostRecent.confirmed + 10;
    };

    const getDeathsInfectionsCircleSize = country => {
        return 0.005 * country.mostRecent.deaths + 3;
    }

    const renderCountry = (country, index) => {
        if (!Countries[country.name]) return null;
        const { lat, lng } = Countries[country.name];
        const bigCircleSize = getConfirmedInfectionsCircleSize(country);
        const smallCircleSize = getDeathsInfectionsCircleSize(country);
        return (
            <Marker 
                key={index}
                country={country}
                lat={lat} 
                lng={lng}
                bigCircleSize={bigCircleSize}
                smallCircleSize={smallCircleSize}
                onClick={() => onCircleClick(country, lat, lng)}
            />
        );
    };

    return (
        <div className={styles.map}>
            <GoogleMapReact
                bootstrapURLKeys={{ key }}    
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={onClick}
            >
                {countries.map(renderCountry)}
                {selectedCountry && (
                    <Card 
                        lat={selectedCountry.lat} 
                        lng={selectedCountry.lng}
                        country={selectedCountry.country}
                    />
                )}
            </GoogleMapReact>
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: 60,
        lng: 30
    },
    zoom: 7
};

export default Map;