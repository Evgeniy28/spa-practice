import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';

import ListItem from './list-item';

class ListPage extends Component {
    static path = '/list';
    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        bindAll(this, ['renderItems']);
    }

    renderItems(item, index) {
        return (
            <ListItem
                key={ index }
                id={ item.id }
                name={ item.name }
            />
        );
    }

    render() {
        const { items } = this.props.list;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <h3>List</h3>
                        <table className='table table-bordered table-hover'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { items.map(this.renderItems) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(ListPage);
