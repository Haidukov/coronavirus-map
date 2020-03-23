import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Map from './Map';
import { wait } from '../../testUtils';

const countriesMock = [
    {
        name: 'Thailand',
        mostRecent: {
            confirmed: 441,
            deaths: 1,
            recovered: 42
        }
    },
    {
        name: 'US',
        mostRecent: {
            confirmed: 10000,
            deaths: 1000,
            recovered: 1000
        }
    }
]

const mapPropsMock = {
    countries: countriesMock,
    zoom: 7,
    center: { lat: 45, lng: 45 } 
}

describe('<Marker/>', () => {
    it('should match snapshot', () => {
        const wrapper = render(
            <Map {...mapPropsMock} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render data', () => {
        const { getAllByTestId } = render((
            <Map {...mapPropsMock} />
        ));
        const markers = getAllByTestId('marker');
        expect(markers.length).toBe(2);
    });

    it('should handle onclick event', async () => {
        const { getAllByTestId, queryByTestId, getByTestId } = render(<Map {...mapPropsMock} />);
        const [marker] = getAllByTestId('marker');
        let card = queryByTestId('card');
        expect(card).toBeNull();
        fireEvent.click(marker);
        await wait();
        card = getByTestId('card');
        expect(card).toBeInTheDocument();
    });
});