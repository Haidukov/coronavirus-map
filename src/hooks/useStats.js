import { useMemo } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const sum = (list, callback) => list.reduce((result, current) => result + callback(current), 0);

export const fetchStats = gql`
  {
    countries {
      name,
      mostRecent {
        confirmed,
        deaths,
        recovered
      }
    }
  }
`;

export const useApi = () => {
    const { loading, error, data } = useQuery(fetchStats);
    return { loading, error, data };
};

export const useStats = () => {
    const { loading, error, data } = useApi();

    const infectedCountries = useMemo(() => 
            data ? data.countries.filter(country => country.confimed !== 0) : [],
        [data]
    );

    const totalConfirmed = useMemo(() => 
            sum(infectedCountries, country => country.mostRecent.confirmed), 
        [infectedCountries]
    );

    const totalDeaths = useMemo(() => 
            sum(infectedCountries, country => country.mostRecent.deaths), 
        [infectedCountries]
    );

    const totalRecovered = useMemo(() => 
            sum(infectedCountries, country => country.mostRecent.recovered), 
        [infectedCountries]
    );

    return { 
        loading, 
        error, 
        countries: infectedCountries,
        totalConfirmed,
        totalDeaths,
        totalRecovered
    };
};