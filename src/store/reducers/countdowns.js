import _ from 'lodash';
const initState = {
  countdowns: [],
};

const aboutPage = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNTDOWN':
      const cds = state.countdowns;
      cds.push(action.payload``);
      return {
        ...state,
        countdowns: cds,
      };

    case 'REMOVE_COUNTDOWN':
      // remove the character from the selected characters array
      const cdsRemove = state.countdowns;

      _.pull(cdsRemove, action.payload);
      return {
        ...state,
        coundowns: cdsRemove,
      };

    default:
      return state;
  }
};

export default aboutPage;
