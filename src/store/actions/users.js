export const addUserRequest = githubUsername => ({
  type: 'ADD_USER_REQUEST',
  payload: { githubUsername },
});

export const addUserSuccess = userData => ({
  type: 'ADD_USER_SUCCESS',
  payload: { userData },
});
