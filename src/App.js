import React from 'react';
import { TotalStatistics, Map, LoadingScreen } from './components';
import { useStats, usePosition } from './hooks';

const App = () => {
    const { position } = usePosition();

    const { 
        loading, 
        error, 
        countries, 
        totalConfirmed, 
        totalRecovered, 
        totalDeaths 
    } = useStats();

    if (!position || loading) return <LoadingScreen/>;

    if (error) return <div>Failed to fetch data</div>

    return (
        <div>
            <TotalStatistics
                totalConfirmed={totalConfirmed}
                totalDeaths={totalDeaths}
                totalRecovered={totalRecovered}
        />
            <Map 
                countries={countries}
                center={position}
            />
        </div>
    );
}

export default App;
