import React, {useState} from 'react';
import {connect} from 'react-redux';
import {insertTodo} from './thunk';
import {getTodos} from './selectors';
import './NewTodoForm.css';


const NewTodoForm = ({todos, onCreatePressed}) => {
    
    const [inputValue, setInputValue]= useState('');

    const handleClick = () =>{
        const isTaken = todos.some(todo => todo.text === inputValue);
        if(!isTaken){
            onCreatePressed(inputValue);
            setInputValue('');
        }
    }

    const handleOnChange = e =>{
        setInputValue(e.target.value);
    }

    return (
      <div className='NewTodoForm'>
            <input className='new-todo-input'
                placeholder="type your new todo here"
                value={inputValue}
                onChange = {handleOnChange}
                type='text'/>
            <button className='new-todo-button'
                onClick ={handleClick}>
              Create Todo
            </button>
      </div>  
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch =>({
    onCreatePressed: text => dispatch(insertTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);