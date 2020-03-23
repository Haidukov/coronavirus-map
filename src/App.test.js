import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import App from './App';
import { fetchStats } from './hooks/useStats';
import { wait } from './testUtils';

describe('<App/>', () => {
    it('renders without error', async () => {
        render(
            <MockedProvider>
                <App />
            </MockedProvider>
        );
        await wait();
    });

    it('should show loading indicator while fetching data', async () => {
        const { getByTestId } = render(
            <MockedProvider mocks={[]}>
                <App />
            </MockedProvider>
        );
        const loading = getByTestId('loading');
        expect(loading).toBeInTheDocument();
        await wait();
    })

    it('should fetch covid-19 stats on app start', async () => {
        const statsMock = {
            request: {
                query: fetchStats,
            },
            result: {
                data: {
                    countries: [
                        {
                            name: 'Thailand',
                            __typename: 'Country',
                            mostRecent: {
                                confirmed: 441,
                                deaths: 1,
                                recovered: 42,
                                __typename: 'Result'
                            }
                        },
                        {
                            name: 'US',
                            __typename: 'Country',
                            mostRecent: {
                                confirmed: 10000,
                                deaths: 1000,
                                recovered: 1000,
                                __typename: 'Result'
                            }
                        }
                    ]
                }
            }
        };
        const { getAllByTestId } = render(
            <MockedProvider mocks={[statsMock]}>
                <App />
            </MockedProvider>
        );
        await wait();
        const list = getAllByTestId('marker')
        expect(list.length).toBe(2);
    });

    it('should show error UI', async () => {
        const statsMock = {
            request: {
                query: fetchStats,
            },
            error: new Error('error')
        };

        const { getByTestId } = render(
            <MockedProvider mocks={[statsMock]}>
                <App />
            </MockedProvider>
        );

        await wait();
        const error = getByTestId('error');
        expect(error).toBeInTheDocument();
    })
});