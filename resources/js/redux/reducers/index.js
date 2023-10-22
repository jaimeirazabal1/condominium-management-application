import { combineReducers } from 'redux'
import taskReducer from './taskReducer';
import authReducer from './authReducer';
import apartamentsReducer from './apartamentsReducer';

// redux/reducers/index.js
const rootReducer = combineReducers({
    task:taskReducer,
    auth:authReducer,
    apartaments:apartamentsReducer
});
  
export default rootReducer;