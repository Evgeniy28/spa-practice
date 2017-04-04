import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import classnames from 'classnames';

import { LocalStorageManager } from '../../utils/index';
import Input from '../../components/ui/input/index';
import Loader from '../../components/ui/loader/index';
import {
    addTodo,
    endTodo,
    deleteTodo,
    getTodos
} from './actions';

import './style.scss';

class HomePage extends Component {
    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);

        this.props.dispatch( getTodos() );
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        this.props.dispatch( addTodo(this.props.home.todos, this.state.todoName) );
        this.setState({ todoName: '' });
    }

    renderTodos(item, index) {
        const todoClasses = classnames('home-todo__item', {
            'home-todo__item--disable': item.end
        });

        const btnClasses = classnames('btn', {
            'active': item.end
        });

        return (
            <li key={ index } className={ todoClasses }>
                <span>{ item.name }</span>
                <button className={ btnClasses } onClick={ this.likeTodo.bind(this, item) }><i className='glyphicon glyphicon-ok' /></button>
                <button className='btn' onClick={ this.deleteTodo.bind(this, item) }><i className='glyphicon glyphicon-trash' /></button>
            </li>
        );
    }

    likeTodo(todo) {
        this.props.dispatch( endTodo(todo) );
    }

    deleteTodo(todo) {
        this.props.dispatch( deleteTodo(todo) );
    }

    render() {
        const { todoName } = this.state;
        const { todos, error, isLoading } = this.props.home;
        LocalStorageManager.set('todos', todos);
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <ul className='home-todo'>
                            {
                                isLoading
                                    ? <Loader />
                                    : todos.length !== 0
                                        ? todos.map(this.renderTodos)
                                        : 'No element!'
                            }
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

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
