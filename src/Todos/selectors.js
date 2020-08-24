import {createSelector} from 'reselect';

export const getTodos = state => state.dataContext.todos;
export const getIsLoading = state => state.dataContext.isLoading;

export const getInCompletedTodos = createSelector(
    getTodos,
    (todos)=>todos.filter(todos => !todos.isCompleted)
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos)=> todos.filter(todos=> todos.isCompleted)
);