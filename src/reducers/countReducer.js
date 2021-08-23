const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}
const countReducer = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + action.payload;
        case ACTIONS.DECREMENT:
            return (state > 0) ? state - action.payload : 0;
        default:
            return state;
    }
}

export default countReducer
