import { useCallback, useEffect, useReducer } from 'react';

const GET_POSITION_SUCCESS = 'GET_POSITION_SUCCESS';
const GET_POSITION_FAILED = 'GET_POSITION_FAILED';

const getPositionSuccess = payload => ({
    type: GET_POSITION_SUCCESS,
    payload
});

const getPositionFailed = payload => ({
    type: GET_POSITION_FAILED,
    payload
});

const initialState = {
    position: undefined,
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSITION_SUCCESS: {
            return {
                position: action.payload,
                loading: true,
                error: false
            }
        }
        case GET_POSITION_FAILED: {
            return {
                position: null,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export const usePosition = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { position, loading, error } = state;

    const locationWatcher = useCallback(position => {
        const { longitude: lng, latitude: lat } = position.coords;
        dispatch(getPositionSuccess({ lat, lng }));
    }, []);

    const errorHandler = useCallback((error => 
        dispatch(getPositionFailed(error))
    ), []);

    const getLocation = useCallback(() => 
        navigator.geolocation.getCurrentPosition(locationWatcher, errorHandler), 
        [locationWatcher, errorHandler]
    );

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return { position, loading, error };
};

