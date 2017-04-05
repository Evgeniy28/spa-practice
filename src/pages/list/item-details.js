import React, { Component, PropTypes } from 'react';
import { bindAll } from 'lodash';

import { store } from '../../index';

export default class ItemDetails extends Component {
    static propTypes  = {
        routeParams: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['getCurrentItemFromStore']);

        const item = this.getCurrentItemFromStore();

        this.state = {
            id: item.id,
            name: item.name,
            video: item.youtube
        };
    }

    getCurrentItemFromStore() {
        const actualStore = store.getState();
        const { items } = actualStore.list;

        const index = items.findIndex(item => item.id === Number(this.props.routeParams.id));

        return {
            id: items[ index ].id,
            name: items[ index ].name,
            youtube: items[ index ].youtube
        };
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12'>
                        <div className='panel panel-info'>
                            <div className='panel-heading'>
                                <h3 className='panel-title'>{ this.state.id }. { this.state.name }</h3>
                            </div>
                            <div className='panel-body'>
                                <div className='embed-responsive embed-responsive-16by9'>
                                    <iframe className='embed-responsive-item' src={`https://www.youtube.com/embed/${this.state.video}`} allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
