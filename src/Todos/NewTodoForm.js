import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from './actions';
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
    todos: state.todos
});

const mapDispatchToProps = dispatch =>({
    onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);