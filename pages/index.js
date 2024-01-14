import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setButton('Get Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh', padding: '30px', maxWidth: '400px', margin: '0 auto',
      }}
    >
      <h1>{joke.setup}</h1>
      <p>{btnText === 'Get Punchline' ? joke.punchline : ''}</p>
      <Button type="button" onClick={btnText === 'Get A Joke' ? getAJoke : () => setButton('Get A New Joke')}>
        {btnText}
      </Button>
    </div>
  );
}

Home.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
};

export default Home;
