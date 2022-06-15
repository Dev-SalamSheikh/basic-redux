// What is Payload ?
// Lets Know What Payload Does?
// Basically The Payload receive a initial value which can be controlled by the state as we want to do

// Lets Make a Counter App Functionality Using Redux
// What we need to do the task?

const { createStore } = require("redux");

// State  - count:0
// action -> increment, decrement, reset
// Reducer
// Store

// Global Varriables
const ADD_USER = "ADD_USER";

// Initial State
const myUsers = {
  user: ["Salam Sheikh"],
  totalUser: 1,
};

// Action Function
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// Reducer Functionality which is work on our logic

const userReducer = (state = myUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        totalUser: state.totalUser + 1,
      };

    default:
      state;
  }
};

// Have to Store the all states in somewhere, in that case we are using store

const store = createStore(userReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// If we want to See Output at the console log then we have to dispatch the store variable

store.dispatch(addUser("Safwan Al Safi"));
store.dispatch(addUser("Md Selim Mia"));
store.dispatch(addUser("Salma Akter"));
store.dispatch(addUser("Sirajul Islam"));
store.dispatch(addUser("Samsun Nahar"));
store.dispatch(addUser("Sakhera Banu"));
