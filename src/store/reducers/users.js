const INITIAL_STATE = [
  {
    is: 1,
    login: 'ThaisMurici',
    name: 'Thais Moraes',
    avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
  },
  {
    id: 2,
    login: 'ThaisMurici',
    name: 'Thais Moraes',
    avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return [
        ...state,
        {
          id: action.payload.userData.id,
          login: action.payload.userData.login,
          name: action.payload.userData.name,
          avatar: action.payload.userData.avatar,
        },
      ];
    default:
      return state;
  }
}
