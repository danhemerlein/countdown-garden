const initState = {
  countdowns: [],
};

const countdownsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      return {
        countdowns: [...action.payload],
      };

    case 'REMOVE_COUNTDOWN':
      return {
        countdowns: [...action.payload],
      };

    default:
      return state;
  }
};

export default countdownsReducer;
