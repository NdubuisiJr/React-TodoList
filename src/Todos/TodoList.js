import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import {RemoveTodo} from './actions';
import './TodoList.css';

const TodoList = ({todos = [], onRemovedPressed}) =>{
    return (
        <div className='TodoList'>
            <NewTodoForm />
            {todos.map(todo=> 
                <TodoListItem key={todo.text} todo={todo}
                    removedPressed={onRemovedPressed} />
            )}
        </div>
    );
}

const mapStateToProps = state =>({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>({
    onRemovedPressed: text => dispatch(RemoveTodo(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);