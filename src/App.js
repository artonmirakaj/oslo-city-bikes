import Availability from './components/Availability';
import FreeSpots from './components/FreeSpots';
import Stations from './components/Stations';

function App() {
  return (
    <div className='container'>
      <h2 className='d-flex justify-content-center'>Oslo City Bikes</h2>
      <div class='container'>
        <div class='row'>
          <div class='col-sm'>
            <h4 className='d-flex justify-content-center'>Station Name</h4>
            <Stations />
          </div>
          <div class='col-sm'>
            <h4 className='d-flex justify-content-center'>Available Bikes</h4>
            <Availability />
          </div>
          <div class='col-sm'>
            <h4 className='d-flex justify-content-center'>Free Spots</h4>
            <FreeSpots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
