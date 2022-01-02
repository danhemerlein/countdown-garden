export const addCountdown = (payload) => {
  console.log('running the add countdown action');
  return {
    type: 'ADD_COUNTDOWN',
    payload,
  };
};

export const removeCountdown = (payload) => ({
  type: 'REMOVE_COUNTDOWN',
  payload,
});
