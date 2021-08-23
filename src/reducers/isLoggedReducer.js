const ACTIONS = {
    LOGIN: 'LOGIN',
}
const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return !state;
        default:
            return state;
    }
}

export default isLoggedReducer;