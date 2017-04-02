import React, { Component } from 'react';

export default class HomePage extends Component {
    static path = '/';

    render() {
        return (
            <div>
                <div className="alert alert-success">Hi from Home</div>
            </div>
        );
    }
}
