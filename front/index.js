import React from 'react';
import reactDom from 'react-dom';

import Chart from './components/Chart';
import DataTable from './components/DataTable';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stocks: [] };
    }

    componentDidMount() {
        fetch('http://localhost:3000/stocks')
            .then(response => response.json())
            .then(stocks => {
                this.setState({ stocks: stocks.slice(stocks.length - 20) });
                console.log(stocks);
            })
            .catch(e => console.error(e));
    }

    render() {
        return (
            <div>
                <h1>Simple dashboard with Node, React and D3?</h1>
                <Chart />
                <DataTable stocks={this.state.stocks} />
            </div>
        )
    };
}

reactDom.render(<App />, document.querySelector('#react-app'));