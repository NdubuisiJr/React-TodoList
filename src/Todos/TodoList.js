import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = ({todos = [{text:"Hello world"}]}) =>{
    return (
        <div className='TodoList'>
            <NewTodoForm />
            {todos.map(todo=> <TodoListItem todo={todo} />)}
        </div>
    );
}

export default TodoList;