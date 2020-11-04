import React, { Component } from 'react';
import axios from 'axios';

class Stations extends Component {
  state = {
    station: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json'
      )
      .then((res) => {
        this.setState({
          station: res.data.data.stations,
        });
      });
  }

  render() {
    return (
      <ul className='list-group'>
        {this.state.station.map((i) => (
          <li
            className='list-group-item'
            style={{ textAlign: 'center' }}
            key={i.station_id}
          >
            {i.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Stations;
