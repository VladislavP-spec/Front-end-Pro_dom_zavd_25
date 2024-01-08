import React, { Component } from 'react';

class InputForm extends Component {
    render() {
        const { endpoint, onEndpointChange, onFetchData, isLoading } = this.props;

        return (
            <div className="mb-3">
                <p className="text-muted">
                    Need a hint? try people/1/ or planets/3/ or starships/9/
                </p>
                <input
                    type="text"
                    placeholder="Enter endpoint"
                    value={endpoint}
                    onChange={(e) => onEndpointChange(e.target.value)}
                    className="form-control"
                    disabled={isLoading}
                />
                <button
                    className="btn btn-primary mt-2"
                    onClick={onFetchData}
                    disabled={isLoading}
                >
                    {isLoading ? 'Fetching...' : 'Get Info'}
                </button>
            </div>
        );
    }
}

export default InputForm;
