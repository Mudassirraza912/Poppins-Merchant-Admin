import { combineReducers } from 'redux'
import merchantReducer from './merchant.reducer'
import userReducer from './user.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
  merchantReducer
})

export default reducers
