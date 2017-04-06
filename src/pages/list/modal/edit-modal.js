import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import { closeModal } from '../../../components/modal/index';
import Input from '../../../components/ui/input/index';

class EditModal extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        youtube: PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            youtube: this.props.youtube,
            errors: {
                name: '',
                youtube: ''
            }
        };

        bindAll(this, ['close', 'changeName', 'changeLink', 'save']);
    }

    close() {
        this.props.dispatch( closeModal() );
    }

    changeName(name) {
        this.setState({ name });
    }

    changeLink(youtube) {
        this.setState({ youtube });
    }

    save() {
        const { id, name, youtube } = this.state;
        const errorTitle = 'Field can not be empty!';
        const errors = {
            name: '',
            youtube: ''
        };

        if (name === '') {
            errors.name = errorTitle;
        }

        if (youtube === '') {
            errors.youtube = errorTitle;
        }

        if (errors.name || errors.youtube) {
            this.setState({ errors });
            return;
        }

        this.props.dispatch( this.props.onSave({ id, name, youtube }) );
        this.close();
    }

    render() {
        return (
            <div>
                <div className='modal-body'>
                    <h1>Hello from EditModal!</h1>
                    <p>ID: { this.state.id }</p>
                    <Input
                        onChange={ this.changeName }
                        value={ this.state.name }
                        error={ this.state.errors.name }
                    />
                    <Input
                        onChange={ this.changeLink }
                        value={ this.state.youtube }
                        error={ this.state.errors.youtube }
                    />
                </div>
                <div className='modal-footer'>
                    <button type='button' className='btn btn-default' onClick={ this.close }>Cancel</button>
                    <button type='button' className='btn btn-success' onClick={ this.save }>Save</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(EditModal);
