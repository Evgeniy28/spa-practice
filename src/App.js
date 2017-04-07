import React, { Component, PropTypes } from 'react';

import { DevTools } from './utils/index';

import { Header } from './components/index';
import { Modal } from './components/modal/index';
import { TopAlert } from './components/top-alert/index';

export default class App extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div>
                <Header />
                <TopAlert />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }

                <Modal />
            </div>
        );
    }
}
