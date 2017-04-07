import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import is from 'is_js';

import { submitForm } from './actions';
import Input from '../../components/ui/input/index';

class ContactPage extends Component {
    static path = '/contact';
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            errorName: '',
            errorEmail: ''
        };
    }

    changeName(name) {
        this.setState({ name });
    }

    changeEmail(email) {
        this.setState({ email });
    }

    submit(e) {
        e.preventDefault();

        if (!::this._isFormValid()) return;

        this.props.dispatch( submitForm(this.state.name, this.state.email) );
        this.setState({
            name: '',
            email: ''
        });
    }

    _isFormValid() {
        return ::this._isNameValid(this.state.name) && ::this._isEmailValid(this.state.email);
    }

    _isNameValid(name) {
        let errorName = '';

        if (name === '') {
            errorName = 'Field can not be empty!';
            this.setState({ errorName });
            return false;
        }

        if (name.length < 3) {
            errorName = 'The field length can not be less than 3 characters!';
            this.setState({ errorName });
            return false;
        }

        this.setState({ errorName });
        return true;
    }

    _isEmailValid(email) {
        let errorEmail = '';

        if (email === '') {
            errorEmail = 'Field can not be empty!';
            this.setState({ errorEmail });
            return false;
        }

        if (!is.email(email)) {
            errorEmail = 'it\'s not email!';
            this.setState({ errorEmail });
            return false;
        }

        this.setState({ errorEmail });
        return true;
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6'>
                        <form action=''>
                            <p><b>Name:</b></p>
                            <Input
                                onChange={ ::this.changeName }
                                value={ this.state.name }
                                error={ this.state.errorName }
                            />
                            <p><b>Email:</b></p>
                            <Input
                                onChange={ ::this.changeEmail }
                                value={ this.state.email }
                                error={ this.state.errorEmail }
                            />
                            <button className='btn btn-primary' type='submit' onClick={ ::this.submit }>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactPage);
