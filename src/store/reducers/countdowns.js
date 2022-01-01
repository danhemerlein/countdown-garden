import _ from 'lodash';

const initState = {
  countdowns: [],
};

const countdownsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
    // state.countdowns.push(action.payload)
    // return {
    //   countdowns: state.countdowns,
    // };

    case 'REMOVE_COUNTDOWN':
      const cdsRemove = state.countdowns;

      _.pull(cdsRemove, action.payload);

      return {
        countdowns: cdsRemove,
      };

    default:
      return state;
  }
};

export default countdownsReducer;
