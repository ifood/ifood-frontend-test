//rootReducer.js . Imported in store file above.
import { combineReducers } from 'redux';
import { list } from './components/list/listReducer';
import { filter } from './components/filter/filterReducer';
const rootReducer = combineReducers({
    list,
    filter
});
export default rootReducer;