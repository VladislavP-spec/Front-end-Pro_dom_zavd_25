import React, { Component } from 'react';

class LoadingSpinner extends Component {
    render() {
        const { isLoading } = this.props;

        return isLoading ? (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ) : null;
    }
}

export default LoadingSpinner;

