import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background__art-box"></div>
      <form>
        <h1>Search for a rental car</h1>
        <label htmlFor="location">Pick up location</label>
        <input
          type="text"
          id="location"
          placeholder="City, airport, region, district..."
        />
        <input type="checkbox" id="deliver-elsewhere" />
        <label htmlFor="deliver-elsewhere">
          Deliver the car somewhere else
        </label>
      </form>
    </div>
  );
}

export default App;
