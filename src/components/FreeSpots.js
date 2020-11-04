import React, { Component } from 'react';
import axios from 'axios';

class FreeSpots extends Component {
  state = {
    spots: [],
  };

  componentDidMount() {
    axios
      .get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json')
      .then((res) => {
        this.setState({
          spots: res.data.data.stations,
        });
      });
  }

  render() {
    return (
      <ul className='list-group'>
        {this.state.spots.map((i) => (
          <li
            className='list-group-item'
            style={{ textAlign: 'center' }}
            key={i.station_id}
          >
            <span className='badge badge-success badge-pill'>
              {i.num_docks_available}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default FreeSpots;
