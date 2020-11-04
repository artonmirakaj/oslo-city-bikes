import React, { Component } from 'react';
import axios from 'axios';

class Availability extends Component {
  state = {
    availableBikes: [],
  };

  componentDidMount() {
    axios
      .get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json')
      .then((res) => {
        this.setState({
          availableBikes: res.data.data.stations,
        });
      });
  }

  render() {
    return (
      <ul className='list-group'>
        {this.state.availableBikes.map((i) => (
          <li
            className='list-group-item'
            style={{ textAlign: 'center' }}
            key={i.station_id}
          >
            <span className='badge badge-primary badge-pill'>
              {i.num_bikes_available}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Availability;
