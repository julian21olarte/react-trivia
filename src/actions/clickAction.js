export const  updateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        text
    }
};

export const  updateList = (element) => {
    return {
        type: 'UPDATE_LIST',
        element
    }
};

export const changeNickname = (nickname) => {
    return {
        type: 'CHANGE_NICKNAME',
        nickname
    }
};

export const initGame = (user) => {
    return {
        type: 'INIT_GAME',
        user
    }
};

export const decrementTime = (time) => {
    return {
        type: 'DECREMENT_TIME',
        time
    }
};

export const finishTime = (time) => {
    console.log(time);
    return {
        type: 'FINISH_TIME',
        time
    }
};