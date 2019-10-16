import { user } from './UserReducer'
import { menu } from './MenuReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    menu,

})

