export const list = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_LIST' :
            console.log(action);
            console.log(state);
            return state.concat(action.element);
        default:
            return state;
    }
};

export const text = (state = 'Trivia', action) => {
  switch(action.type) {
      case 'UPDATE_TEXT':
          return action.text;
      default:
          return state;
  }
};

export const userData = (state = {}, action) => {
    switch(action.type) {
        case 'INIT_GAME':
            return action.user;
        default:
            return state;
    }
};

export const nickname = (state = '', action) => {
    switch(action.type) {
        case 'CHANGE_NICKNAME':
            return action.nickname;
        default:
            return state;
    }
};

export const time = (state = 10, action) => {
    console.log(action);
    switch(action.type) {
        case 'DECREMENT_TIME':
            return action.time--;
        case 'FINISH_TIME':
            return action.time;
        default:
            return state;
    }
};