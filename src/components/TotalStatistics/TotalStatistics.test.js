import React from 'react';
import { render } from '@testing-library/react';
import TotalStatistics from './TotalStatistics';

describe('<TotalStatistics/>', () => {
    it('should render component', () => {
        const { container } = render(<TotalStatistics/>);
        expect(container).toMatchSnapshot();
    });

    it('should render data', () => {
        const { container, getByTestId } = render(
            <TotalStatistics 
                totalConfirmed={10000} 
                totalDeaths={1000}
                totalRecovered={2000}
            />);

        const confirmed = getByTestId('confirmed');
        const deaths = getByTestId('deaths');
        const recovered = getByTestId('recovered');

        expect(confirmed).toHaveTextContent(10000);
        expect(deaths).toHaveTextContent(1000);
        expect(recovered).toHaveTextContent(2000);
        expect(container).toMatchSnapshot();
    })
});