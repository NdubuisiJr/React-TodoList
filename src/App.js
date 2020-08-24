import React from 'react';
import TodoList from './Todos/TodoList';
import styled from 'styled-components';
import {hot} from 'react-hot-loader/root';

const AppLayout = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
`;

const App = () => {
    return (
        <AppLayout className='App'>
            <TodoList />
        </AppLayout>
    );
};

export default hot(App);
