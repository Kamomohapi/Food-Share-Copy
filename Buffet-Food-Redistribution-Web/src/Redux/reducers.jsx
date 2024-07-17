import { combineReducers } from 'redux';
import { ACCEPT_REQUEST, DECLINE_REQUEST } from './actionTypes';

const initialState = {
  requests: [],
};

const requestsReducer = (state = initialState.requests, action) => {
  switch (action.type) {
  
    case ACCEPT_REQUEST:
      return state.map(request =>
        request.id === action.payload ? { ...request, status: 'accepted' } : request
      );
    case DECLINE_REQUEST:
      return state.map(request =>
        request.id === action.payload ? { ...request, status: 'declined' } : request
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  requests: requestsReducer,
  // other reducers can be added here if needed
});

export default rootReducer;