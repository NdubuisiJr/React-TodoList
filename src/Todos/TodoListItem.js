import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, removedPressed}) =>{

    const handleClick = ()=>{
        removedPressed(todo.text);
    }

    return (
        <div className='TodoListItem'>
            <h3>{todo.text}</h3>
            <div className='buttons-container'>
                <button className='completed-button'>Mark As completed</button>
                <button onClick={handleClick}
                    className='remove-button'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;