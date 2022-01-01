import _ from 'lodash';
const initState = {
  countdowns: [],
};

const countdownsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      console.log(action.payload);

      const cds = state.countdowns;

      cds.push(action.payload);

      console.log(cds);
      return {
        countdowns: cds,
      };

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
