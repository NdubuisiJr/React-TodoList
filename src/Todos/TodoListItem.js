import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, removedPressed, completedPressed}) =>{

    const handleRemoveClick = ()=>{
        removedPressed(todo.id);
    }

    const handleCompletedClick = () =>{
        completedPressed(todo.id);
    }

    return (
        <div className='TodoListItem'>
            <h3>{todo.text}</h3>
            <div className='buttons-container'>
                {todo.isCompleted ? 
                    null          :
                    <button onClick={handleCompletedClick}
                        className='completed-button'>
                        Mark As completed
                    </button>
                }
                <button onClick={handleRemoveClick}
                    className='remove-button'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;