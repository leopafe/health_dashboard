import React, { Component } from 'react';
var request = require('superagent');
import { getHealth } from './APIService';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentWillMount(){
        var here = this;
        request
            .get('http://sample-env.3ctthphz6g.ap-southeast-2.elasticbeanstalk.com/api/status')
            .end(function(err, res){
                if(err || !res.ok){
                    console.log('Error getting health: ' + err);
                }
                else{
                    // here.setState({services: [{"name":"Subscription Service","status":"UP"},{"name":"Product Catalog","status":"UP"},{"name":"Pricing Service","status":"UP"}]});
                    here.setState({services: res.body});
                }
            })
    }

    render() {
        return (
            <Table
                services={this.state.services}
            />
        );
    }
}

class Table extends React.Component {

    render(){
        var rows;
        if(this.props.services.length > 0) {
            console.log(this.props);
            rows = this.props.services.map(service => {
                return (
                    <ServiceRow
                        key={service.name}
                        service={service}
                    />
                )
            })
        }

        return(
            <table>
                <thead>
                <tr>
                    <th>Service</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

const ServiceRow = (props) => {
    return (
        <tr>
            <td>
                { props.service.name }
            </td>
            <td>
                { props.service.status }
            </td>
        </tr>
    );
}

export default App;
