import {
    fetchTodoFailure,
    fetchTodoInProgress, 
    fetchTodoSuccess,
    createTodo,
    RemoveTodo,
    CompleteTodo
} from './actions';

export const updateTodo = id => async dispatch =>{
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
            method:'POST'
        });
        const updatedTodo = await response.json();
        dispatch(CompleteTodo(updatedTodo.id));
    } 
    catch (e) {
      dispatch(displayAlert(e));  
    }
};

export const deleteTodo = id => async dispatch =>{
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,{
            method: 'DELETE'
        });
        const deletedTodo = await response.json();
        dispatch(RemoveTodo(deletedTodo.id));
    } 
    catch (e) {
        dispatch(displayAlert(e));   
    }
};

export const insertTodo = text =>async dispatch =>{
    try {
        const body = JSON.stringify({text});
        var response = await fetch('http://localhost:8080/todos',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:body
        });

        const todo = await response.json();
        dispatch(createTodo(todo));

    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const fetchTodos = () => async (dispatch, getState)=>{
    try {
        dispatch(fetchTodoInProgress());
        var response = await fetch('http://localhost:8080/todos');
        var todos = await response.json();
        dispatch(fetchTodoSuccess(todos));
    } 
    catch (e) {
        dispatch(fetchTodoFailure());
        dispatch(displayAlert(e));
    }
};

export const displayAlert = text => () =>{
    alert(text);
};