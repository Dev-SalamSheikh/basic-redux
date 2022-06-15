// Lets Make a Counter App Functionality Using Redux
// What we need to do the task?

const { createStore } = require("redux");

// State  - count:0
// action -> increment, decrement, reset
// Reducer
// Store

// Global Varriables
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Initial State
const counterInitialState = {
  count: 5,
};

// Making Different Kind of Action For all Functionality
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// Reducer Functionality which is work on our logic

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count * 5,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count / 5,
      };
    case RESET:
      return {
        ...state,
        count: 5,
      };

    default:
      state;
  }
};

// Have to Store the all states in somewhere, in that case we are using store

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// If we want to See Output at the console log then we have to dispatch the store variable
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
