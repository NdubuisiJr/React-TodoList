import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {fetchTodos, deleteTodo, updateTodo} from './thunk';
import {getIsLoading, getInCompletedTodos,getCompletedTodos} from './selectors';

const TodoListLayout = styled.div`
    max-width: 700px;
    margin: auto;
`;

const LoadingLayout = styled.div`
    max-width:700px;
    margin: auto;
    color: #f00;
`;

const TodoList = ({completedTodos = [], inCompletedTodos=[], onRemovedPressed, markAsCompletePressed, isLoading, startLoadingTodos}) =>{
    useEffect(()=>{
        startLoadingTodos();
    },[]);
    const Loading = <LoadingLayout>is Loading...</LoadingLayout>;

    const content = <TodoListLayout>
                        <NewTodoForm />
                        <h3>Incomplete Todos</h3>
                        {inCompletedTodos.map(todo=> 
                            <TodoListItem key={todo.text} todo={todo}
                            removedPressed={onRemovedPressed} completedPressed = {markAsCompletePressed}/>
                        )}
                        <h3>Completed Todos</h3>
                        {completedTodos.map(todo=> 
                            <TodoListItem key={todo.text} todo={todo}
                            removedPressed={onRemovedPressed} completedPressed = {markAsCompletePressed}/>
                        )}
                    </TodoListLayout>
    return isLoading? Loading: content;
}

const mapStateToProps = state =>({
    completedTodos: getCompletedTodos(state),
    inCompletedTodos: getInCompletedTodos(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch =>({
    onRemovedPressed: id => dispatch(deleteTodo(id)),
    markAsCompletePressed: id => dispatch(updateTodo(id)),
    startLoadingTodos:()=>dispatch(fetchTodos())
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);