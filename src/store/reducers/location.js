const INITIAL_STATE = {
  latitude: null,
  longitude: null,
};

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CLICKED_LOCATION':
      return { latitude: action.payload.latitude, longitude: action.payload.longitude };
    default:
      return state;
  }
}
