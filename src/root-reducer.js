import { combineReducers } from 'redux';
import ImmigrationReducer from './immigration-tool/immigration-reducer';

const rootReducer = combineReducers({
    immigrations: ImmigrationReducer,
});

export default rootReducer;
