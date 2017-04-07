import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class TopAlert extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { name, email } = this.props.user;
        if (isEmpty(name) || isEmpty(email)) return null;

        return (
            <div className='alert alert-info'>
                Hello { name }, { email }!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TopAlert);
