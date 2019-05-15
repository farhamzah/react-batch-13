const myData = {
    counter:0
}

const myReducer = (state = {...myData}, action ) => {
    switch (action.type){
        case 'INCREMENT':
            return({
                ...state,
                counter: state.counter + 1
            });
        case 'DECREMENT':
            return({
                ...state,
                counter: state.counter - 1
            });
            default:
                return state
    }
}

export default myReducer