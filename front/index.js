import React from 'react';
import reactDom from 'react-dom';

import Chart from './components/Chart';
import DataTable from './components/DataTable';

class App extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3000/stocks')
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch(e => console.error(e));
    }

    render() {
        return (
            <div>
                <h1>Simple dashboard with Node, React and D3?</h1>
                <Chart />
                <DataTable />
            </div>
        )
    };
}

reactDom.render(<App />, document.querySelector('#react-app'));