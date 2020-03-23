import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

describe('<LoadingScreen/>', () => {
    it('should match snapshot', () => {
        const wrapper = render(<LoadingScreen/>);
        expect(wrapper).toMatchSnapshot();
    });
});