import React, { Component } from 'react';
import { bindAll } from 'lodash';

import Input from '../../components/ui/input/index';

export default class HomePage extends Component {
    static path = '/';

    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todos: [
                {
                    id: 1,
                    name: 'Todo 1'
                }
            ],
            error: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        if (this.state.todoName === '') {
            this.setState({ error: 'The field can not be empty!' });
            return;
        }

        const id = this.state.todos[this.state.todos.length - 1].id + 1;
        const name = this.state.todoName;

        const todos = this.state.todos;
        todos.push({ id, name });

        this.setState({ todos });
        this.setState({ todoName: '', error: '' });
    }

    renderTodos(item, index) {
        return (
            <li key={ index }>{ item.name }</li>
        );
    }

    render() {
        const { todoName, todos, error } = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <ul>
                            { todos.map(this.renderTodos) }
                        </ul>
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            error={ error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }
}
