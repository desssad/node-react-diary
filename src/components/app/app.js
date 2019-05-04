import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
        {label: 'Drink Beer', important: true, id: 4},
        {label: 'Make shopping', important: true, id: 5},
        {label: 'Have a dinner', important: false, id: 6}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={6}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
