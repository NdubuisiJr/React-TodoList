import React from 'react';
import styled from 'styled-components';

const TodoListItemLayout= styled.div`
    background: #fff;
    border-radius: 8px;
    border-bottom:${props=>(new Date(props.createdAt) > new Date(Date.now() - 8640000*5) || props.isCompleted) 
    ?
    'none'
    :
    '2px solid red'
    };
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoListItem = ({todo, removedPressed, completedPressed}) =>{

    const handleRemoveClick = ()=>{
        removedPressed(todo.id);
    }

    const handleCompletedClick = () =>{
        completedPressed(todo.id);
    }

    return (
        <TodoListItemLayout createdAt={todo.createdAt} isCompleted={todo.isCompleted}>
            <h3>{todo.text}</h3>
            <p>Created At: {new Date(todo.createdAt).toLocaleDateString()}</p>
            <ButtonsContainer>
                {todo.isCompleted ? 
                    null          :
                    <CompletedButton onClick={handleCompletedClick} >
                        Mark As completed
                    </CompletedButton>
                }
                <RemoveButton onClick={handleRemoveClick}>
                    Remove
                </RemoveButton>
            </ButtonsContainer>
        </TodoListItemLayout>
    );
};

export default TodoListItem;