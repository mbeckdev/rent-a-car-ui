import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
        <div className="form__background-art-box"></div>
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
        <div className="dates-container">
          <div className="date">
            <label htmlFor="date__pickup">Date of pickup</label>
            <input
              // type="pick-date"
              type="text"
              id="date-pickup"
              placeholder="Sat 26 Mar 2022"
              className="input-field"
            />
            <input type="text" placeholder="10" className="input-field" />
            <input type="text" placeholder="00" className="input-field" />
          </div>
        </div>
        <div className="age-container">
          <input
            type="checkbox"
            d="car-search__is-between-30-and-60"
            className="age__input"
          />
          <label htmlFor="car-search__is-between-30-and-60">
            The driver's age between 30 and 65?
          </label>
          <a href="#" className="age-info">
            <div>i</div>
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
