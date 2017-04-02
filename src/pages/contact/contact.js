import React, { Component } from 'react';

export default class ContactPage extends Component {
    static path = '/contact';

    render() {
        return (
            <div>
                <div className="alert alert-danger">Hi from Contact</div>
            </div>
        );
    }
}
