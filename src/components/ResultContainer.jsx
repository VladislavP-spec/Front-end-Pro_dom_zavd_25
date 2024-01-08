import React, { Component } from 'react';

class ResultContainer extends Component {
    render() {
        const { result } = this.props;

        if (!result) {
            return null;
        }

        return (
            <pre>
        Controller: {result.controller}
                ID: {result.id}
                {JSON.stringify(result.data, null, 2)}
      </pre>
        );
    }
}

export default ResultContainer;
