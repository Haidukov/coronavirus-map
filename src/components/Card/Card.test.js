import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card/>', () => {
    it('should render data', () => {
        const countryMock = {
            name: 'Ukraine',
            mostRecent: {
                confirmed: 100,
                deaths: 3
            }
        };
        const { getByTestId, container } = render((
            <Card
                country={countryMock}
            />
        ));

        const name = getByTestId('name');
        const confirmed = getByTestId('confirmed');
        const deaths = getByTestId('deaths');
        
        expect(name).toHaveTextContent('Name: Ukraine');
        expect(confirmed).toHaveTextContent('Confirmed: 100');
        expect(deaths).toHaveTextContent('Deaths: 3');
        expect(container).toMatchSnapshot();
    });
});