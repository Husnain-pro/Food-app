import { combineReducers, createStore } from 'redux';
import mealReducer from './reducers/mealReducers';

const rootReducers = combineReducers({
	meals: mealReducer
});

const store = createStore(rootReducers);
export default store;
