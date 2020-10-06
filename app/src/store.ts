import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { StateType } from "typesafe-actions";
import wordSearch from './reducers/wordSearch';

export const actions = {};
export const rootReducer = combineReducers({
    wordSearch: wordSearch
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

function configureStore(initialState?: {}) {

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    return store;
}

// store; pass an optional param to rehydrate state on app start
const store = configureStore();
export default store;

// root state
export type RootState = StateType<typeof rootReducer>;