// State aregument is not the application state,
// only the state this reducer is responsible for
// i.e.
// 1. take in the previous state
// 2. apply an action
// 3. return the new state

// https://stackoverflow.com/questions/34376023/redux-why-are-state-functions-called-reducers

// Reducers must alway return a non-undefined value, hence "state=null" default value

export default function(state = null, action) {
  console.log("----------------------------");
  console.log("Old state: ", state);
  console.log("Action: ", action);

  switch (action.type) {
    case "BOOK_SELECTED": {
      console.log("New state: ", action.payload);
      return action.payload;
    }
  }

  return state;
}
