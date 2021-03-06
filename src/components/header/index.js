import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='/'>WunderClone</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/list'>List</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
