import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  
  export default store;






























//import redux from 'redux';
// import { acceptRequest } from './actions';
// import requestsReducer from './reducers'
// const redux = require('redux');
// const createStore = redux.createStore;


// const store = createStore(requestsReducer)
// console.log("initial state", store.getState());
// store.subscribe(() => console.log('Updated state', store.getState()));
// store.dispatch(acceptRequest());
