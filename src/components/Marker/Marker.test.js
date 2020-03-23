import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Marker from './Marker';

describe('<Marker/>', () => {
    it('should match snapshot', () => {
        const wrapper = render(<Marker />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render data', () => {
        const { getByTestId, container } = render((
            <Marker 
                smallCircleSize={10} 
                bigCircleSize={100}
            />
        ));
        const bigCircle = getByTestId('bigCircle');
        const smallCircle = getByTestId('smallCircle');

        expect(bigCircle.style.top).toBe('-50px');
        expect(bigCircle.style.left).toBe('-50px');
        expect(bigCircle.style.height).toBe('100px');
        expect(bigCircle.style.width).toBe('100px');

        expect(smallCircle.style.height).toBe('10px');
        expect(smallCircle.style.width).toBe('10px');
        expect(container).toMatchSnapshot();
    });  

    it('should handle onclick event', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Marker onClick={onClick}/>);
        const marker = getByTestId('marker');
        fireEvent.click(marker);
        expect(onClick).toHaveBeenCalled();
    });
});