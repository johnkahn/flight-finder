import React from 'react';

export default () => {
  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [date, setDate] = React.useState('');
  const [flights, setFlights] = React.useState([]);

  console.log(flights);

  const submitHandler = async () => {
    const response = await fetch(`http://sk-node.ngrok.io/flights?origin=${origin}&destination=${destination}&date=${date}`);
    const data = await response.json();
    setFlights(data);
  };

  return (
    <div className="mt3 overflow-auto">
      <h1>Flight Finder</h1>

      <div className="dib w-33 pa2">
        <label className="f6 b db mb2">Origin</label>
        <input
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          onChange={event => setOrigin(event.target.value.toUpperCase())}
          value={origin}
          maxLength={3}
          type="text"
          aria-describedby="name-desc"
        />
        <small className="f6 black-60 db mb2">Three character airport code (E.g. DFW)</small>
      </div>

      <div className="dib w-33 pa2">
        <label htmlFor="name" className="f6 b db mb2">
          Destination
        </label>
        <input
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          onChange={event => setDestination(event.target.value.toUpperCase())}
          value={destination}
          maxLength={3}
          type="text"
          aria-describedby="name-desc"
        />
        <small className="f6 black-60 db mb2">Three character airport code (E.g. JFK)</small>
      </div>

      <div className="dib w-33 pa2">
        <label htmlFor="name" className="f6 b db mb2">
          Date <span className="normal black-60">(required)</span>
        </label>
        <input
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          onChange={event => setDate(event.target.value)}
          value={date}
          type="text"
          aria-describedby="name-desc"
        />
        <small className="f6 black-60 db mb2">Format: YYYY-MM-DD</small>
      </div>

      <div className="mt4 tr">
        <a className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer" onClick={submitHandler}>
          Search
        </a>
      </div>

      <hr className="mv5" />

      {flights.map(flight => {
        return (
          <div>
            <h3>{flight.flightNumber}</h3>
            <p>{flight.origin.city}</p>
            <p>{flight.destination.city}</p>
          </div>
        );
      })}
    </div>
  );
};
