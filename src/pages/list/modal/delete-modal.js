import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import { closeModal } from '../../../components/modal/index';

class DeleteModal extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onSuccess: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['cancel', 'deleteItem']);
    }

    cancel() {
        this.props.dispatch( closeModal() );
    }

    deleteItem() {
        this.props.dispatch( this.props.onSuccess(this.props.id) );
        this.cancel();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <p><b>ID: { this.props.id }</b> - { this.props.name }</p>
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-default' onClick={ this.cancel }>Cancel</button>
                    <button type='button' className='btn btn-danger' onClick={ this.deleteItem }>Delete</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(DeleteModal);
