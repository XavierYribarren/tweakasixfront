import { combineReducers } from 'redux';
import guitarReducer from './ColorReducer';
import cartReducer from './CartReducer';
import userReducer from './UserReducer';
import textureReducer  from './TextureReducer';

const rootReducer = combineReducers({
  guitar_set: guitarReducer,
  cart_items: cartReducer,
  user_data : userReducer,
  texture_data : textureReducer
});

export default rootReducer;