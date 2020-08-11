import React from 'react';
import TodoList from './Todos/TodoList';
import './App.css';
import {hot} from 'react-hot-loader/root';

const App = () => {
    return (
        <div className='App'>
            <TodoList />
        </div>
    );
};

export default hot(App);
