import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { DevTools } from '../utils/index';

import rootReducer from '../reducers';

function _getMiddleware() {
    const middleware = [
        thunk
    ];

    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = compose(
        _getMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);

    return store;
}
