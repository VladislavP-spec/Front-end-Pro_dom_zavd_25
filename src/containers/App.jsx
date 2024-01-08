import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import InputForm from '../components/InputForm';
import ResultContainer from '../components/ResultContainer';
import LoadingSpinner from '../components/LoadingSpinner';

class App extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: '',
            isLoading: false,
            result: null,
        };
    }
    fetchData = async () => {
        const { endpoint } = this.state;

        try {
            this.setState({ isLoading: true });
            const response = await fetch(`https://swapi.dev/api/${endpoint}`);
            const data = await response.json();

            const controller = endpoint.split('/')[0];
            const id = endpoint.split('/')[1];

            this.setState({
                result: {
                    controller,
                    id,
                    data,
                },
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.setState({ isLoading: false });
        }
    };

    handleEndpointChange = (value) => {
        this.setState({ endpoint: value });
    };

    render() {
        const { endpoint, isLoading, result } = this.state;

        return (
            <div className="container">
                <Header />
                <InputForm
                    endpoint={endpoint}
                    onEndpointChange={this.handleEndpointChange}
                    onFetchData={this.fetchData}
                    isLoading={isLoading}
                />
                <ResultContainer result={result} />
                <LoadingSpinner isLoading={isLoading} />
            </div>
        );
    }
}

export default App;
