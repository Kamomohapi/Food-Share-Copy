import {  ACCEPT_REQUEST, DECLINE_REQUEST, NOTIFY_RECIPIENT } from './actionTypes';

export const acceptRequest = (requestId) => ({
  type: ACCEPT_REQUEST,
  payload: requestId,
});

  export const declineRequest = (requestId) => ({
    type: DECLINE_REQUEST,
    payload: requestId,
  });
  
  export const notifyRecipient = (notification) => ({
    type: NOTIFY_RECIPIENT,
    payload: notification,
  });