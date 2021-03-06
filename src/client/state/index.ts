import { combineReducers } from "redux";
import user from './user'
import app from './app'

export const rootReducer = combineReducers({
    app,
    user,
})

export type CommonState = ReturnType<typeof rootReducer>