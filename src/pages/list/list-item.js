import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    }

    render() {
        return (
            <li>
                <Link to={ `/list/${ this.props.id }` }>Hello { this.props.id }</Link>
            </li>
        );
    }
}
