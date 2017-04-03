import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import Input from '../../components/ui/input/index';
import { addTodo } from './actions';

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
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        const { todos } = this.props.home;
        const id = todos[todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name) );
        this.setState({ todoName: '' });
    }

    renderTodos(item, index) {
        return (
            <li key={ index }>{ item.name }</li>
        );
    }

    render() {
        const { todoName } = this.state;
        const { todos, error } = this.props.home;

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

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
