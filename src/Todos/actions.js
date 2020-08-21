export const CREATE_TODO = 'Create todo';
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: {todo}
});

export const REMOVE_TODO = 'Remove todo';
export const RemoveTodo = id => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const COMPLETE_TODO='Complete todo';
export const CompleteTodo = id =>({
    type:COMPLETE_TODO,
    payload: {id}
});

export const FETCH_TODO_INPROGRESS="Fetch todo in progress";
export const fetchTodoInProgress = ()=>({
    type:FETCH_TODO_INPROGRESS
});

export const FETCH_TODO_SUCCESS = "Fetch todo success";
export const fetchTodoSuccess = (todos) =>({
    type:FETCH_TODO_SUCCESS,
    payload: {todos}
});

export const FETCH_TODO_FAILURE = "Fetch todo failure";
export const fetchTodoFailure = () =>({
    type:FETCH_TODO_FAILURE,
});