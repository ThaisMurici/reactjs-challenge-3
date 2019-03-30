export const setClickedLocation = (latitude, longitude) => ({
  type: 'SET_CLICKED_LOCATION',
  payload: { latitude, longitude },
});
