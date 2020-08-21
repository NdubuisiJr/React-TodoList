import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import {fetchTodos, deleteTodo, updateTodo} from './thunk';
import {getTodos, getIsLoading} from './selectors';
import './TodoList.css';

const TodoList = ({todos = [], onRemovedPressed, markAsCompletePressed, isLoading, startLoadingTodos}) =>{
    useEffect(()=>{
        startLoadingTodos();
    },[]);
    const Loading = <div>is Loading...</div>;

    const content = <div className='TodoList'>
                        <NewTodoForm />
                        {todos.map(todo=> 
                            <TodoListItem key={todo.text} todo={todo}
                            removedPressed={onRemovedPressed} completedPressed = {markAsCompletePressed}/>
                        )}
                    </div>
    return isLoading? Loading: content;
}

const mapStateToProps = state =>({
    todos: getTodos(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch =>({
    onRemovedPressed: id => dispatch(deleteTodo(id)),
    markAsCompletePressed: id => dispatch(updateTodo(id)),
    startLoadingTodos:()=>dispatch(fetchTodos())
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);