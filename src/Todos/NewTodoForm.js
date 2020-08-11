import React, {useState} from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue]= useState('');

    return (
      <div className='NewTodoForm'>
          <input className='new-todo-input'
                placeholder="type your new todo here"
                value={inputValue}
                onChange= {e => 
                    setInputValue(e.target.value)
                }
                type='text'/>
          <button className='new-todo-button'>Create Todo</button>
      </div>  
    );
};

export default NewTodoForm;