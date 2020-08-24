import React, {useState} from 'react';
import {connect} from 'react-redux';
import {insertTodo} from './thunk';
import {getTodos} from './selectors';
import styled from 'styled-components';

const NewTodoFormLayout = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

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
      <NewTodoFormLayout>
            <NewTodoInput
                placeholder="type your new todo here"
                value={inputValue}
                onChange = {handleOnChange}
                type='text'/>
            <NewTodoButton
                onClick ={handleClick}>
              Create Todo
            </NewTodoButton>
      </NewTodoFormLayout>  
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch =>({
    onCreatePressed: text => dispatch(insertTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);