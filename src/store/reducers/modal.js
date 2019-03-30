export default function modal(state = false, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return true;
    case 'HIDE_MODAL':
      return true;
    default:
      return state;
  }
}
