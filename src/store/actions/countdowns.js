export const addCountdown = (payload) => {
  return {
    type: 'ADD_COUNTDOWN',
    payload,
  };
};

export const removeCountdown = (payload) => ({
  type: 'REMOVE_COUNTDOWN',
  payload,
});
