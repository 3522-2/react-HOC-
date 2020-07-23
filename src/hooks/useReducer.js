import React, { useReducer } from 'react';

function init(initialCount) {
    console.log(initialCount);
    return { count: initialCount || 0 };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                重置
        </button>
            <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>
        </>
    );
}

export default Counter;
