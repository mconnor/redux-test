import { combineReducers } from 'redux'
import toggle from './toggle/reducer'
import movies from './movies/reducer'
import movie from './movies/reducer'

const rootReducer = combineReducers({
    toggle,
    movies,
    movie
})

export default rootReducer;