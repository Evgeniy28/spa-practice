import React, { Component } from 'react';

import { DevTools } from './utils/index';

export default class App extends Component {
    static path = '/';

    render() {
        return (
            <div>
                <h1>Hello from App!!!</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
