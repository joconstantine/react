import React from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {

    class ComposedComponent extends React.Component {
        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = ({ auth }) => {
        return { auth };
    };

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;