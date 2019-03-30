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
  {
    id: 3,
    login: 'ThaisMurici',
    name: 'Thais Moraes',
    avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: Math.random(),
          login: 'ThaisMurici',
          name: 'Thais Moraes',
          avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
        },
      ];
    default:
      return state;
  }
}
