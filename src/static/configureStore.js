import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './root-reducer';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
