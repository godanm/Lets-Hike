import React from 'react';
import Client from './Client';
import Dashboard from './Dashboard';

class TrailSearch extends React.Component {

  state = {
      trails: []
    }
  componentDidMount() {
    Client.search('godan', data => {
        this.setState(data)
        });
  }

  render() {
    return (
      <Dashboard />
      /* <div>
        <ul>
        {this.state.trails.map(trail =>
            <li key={trail.id}>{trail.name}</li>
          )}
        </ul>
      </div> */
    );
  }
}

export default TrailSearch;
