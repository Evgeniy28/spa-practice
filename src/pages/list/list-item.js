import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { editItem, deleteItem } from './actions';
import { openModal } from '../../components/modal/index';
import EditModal from './modal/edit-modal';
import DeleteModal from './modal/delete-modal';

class ListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }

    edit() {
        const { id, name, youtube } = this.props;
        this.props.dispatch( openModal({
            title: 'Edit',
            content: <EditModal id={ id } name={ name } youtube={ youtube } onSave={ editItem } />
        }) );
    }

    remove() {
        const { id, name } = this.props;
        this.props.dispatch( openModal({
            title: 'Are you sure?',
            content: <DeleteModal id={ id } name={ name } onSuccess={ deleteItem } />
        }) );
    }

    render() {
        return (
            <tr>
                <td>{ this.props.id }</td>
                <td>
                    <Link to={ `/list/${ this.props.id }` }>{ this.props.name }</Link>
                </td>
                <td>
                    <button className='btn btn-success' onClick={ this.edit }>
                        <i className='glyphicon glyphicon-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={ this.remove }>
                        <i className='glyphicon glyphicon-trash' />
                    </button>
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ListItem);
