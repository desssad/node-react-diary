import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Eat dinner')
            // {label: 'Drink Coffee', important: false, id: 1},
            // {label: 'Make Awesome App', important: true, id: 2},
            // {label: 'Have a lunch', important: false, id: 3},
            // {label: 'Drink Beer', important: true, id: 4},
            // {label: 'Make shopping', important: true, id: 5},
            // {label: 'Have a dinner', important: false, id: 6}
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({todoData}) => {

            const idx = todoData.findIndex((el)=>el.id === id);
            // todoData.splice(idx, 1);
            console.log(idx);

            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];


            //
            return {
                todoData: newArr
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });

    };

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };


    render() {
        const {todoData} = this.state;
        const doneCount = todoData
            .filter((el)=>el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        );
    }
};
