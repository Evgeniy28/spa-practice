import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends Component {
    render() {
        return (
            <div className='alert alert-danger'>
                <h3>Page not found!</h3>
                <p>Go to <Link to='/'>home page</Link></p>
            </div>
        );
    }
}
