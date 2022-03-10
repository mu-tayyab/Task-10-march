import cartReducer from '../redux/reducers/cartReducer';
import {createStore} from 'redux';

export const store = createStore(cartReducer);
