import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    a: () => ({
        test: 'test',
    })
})