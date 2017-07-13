export const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_ROOM':
      return action.name;
    case 'CLEAR_NAME':
      return '';
    default:
      return state;
  }
};

export const roomReducer = (state = '', action) => {
  switch (action.type) {
    case 'ENTER_ROOM':
      return action.room;
    case 'LEAVE_ROOM':
      return '';
    default:
      return state;
  }
};

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_INITIAL_MESSAGES':
      return action.messages;
    case 'NEW_MESSAGE':
      return [
        ...state, {
          message: action.message,
          name: action.name,
          room: action.room,
        }
      ];
    case 'LEAVE_ROOM':
      return [];
    default:
      return state;
  }
};

export const otherUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_USER_LIST':
      return action.users;
    case 'LEAVE_ROOM':
      return [];
    default:
      return state;
  }
};