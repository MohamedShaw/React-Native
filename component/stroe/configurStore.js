import {createStore, combineReducers, compose, applyMiddleware}from 'redux';
import { reducer as formReducer } from 'redux-form';

import placeReducer from './reducers/Places';
import RandromReducer from './reducers/RandonReducers'
// import chatReducer from './reducers/ChatReducer';
// import userReducer from './reducers/UserReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    places : placeReducer,
    dataProvider : RandromReducer,
    // chat : chatReducer,r,
    // user : userReduce
    form: formReducer 
});

let composeEnhancer = compose;
if(__DEV__){

    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__||compose;

}
const configerStrore = ()=>{
    return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
}

export default configerStrore;