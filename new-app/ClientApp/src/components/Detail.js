import React, { Component } from 'react';

export class Detail extends Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {

    //    }

    //    fetch('api/SampleData/WeatherForecasts')
    //    .then(response => response.json())
    //    .then(data => {
    //        this.setState({ forecasts: data, loading: false });
    //    });
    //}

    state = {
        loading: true
    }
    fetchDataFromApi = () => {
        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json())
            .then(data => {
                this.setState({ detailresult: data, loading: false });
            });
    }
    renderDataFromApi = (st) => {
        return (<div>
            <div>
                Date : {st.dateFormatted}
            </div>
            <div>
                Temperature C : {st.temperatureC}
            </div>
        </div>
            );
    }

    render() {
        const sts = this.props.location.state;

        let contents = this.state.loading ? <p>Loading</p> : this.renderDataFromApi(this.state.detailresult);

        return (
            <div>
                {this.renderDataFromApi(sts)}
            </div>);
    }

}
