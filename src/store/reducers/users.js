const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return [...state, action.payload.userData];
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.payload.id);
    default:
      return state;
  }
}
