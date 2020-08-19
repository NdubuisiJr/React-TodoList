export const CREATE_TODO = 'Create todo';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text}
});

export const REMOVE_TODO = 'Remove todo';
export const RemoveTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
})