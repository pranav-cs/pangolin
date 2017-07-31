export const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.name;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
};

export const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.room;
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
};