import React, { Fragment, useState, useEffect } from 'react';
import loader from './assets/img/load.gif';
import "./App.css";
import { Container, Button, Blink, Stars } from "./styles";

function App() {
  const [error, setError] = useState(false);
  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState([]);

  const getPlanets =  React.useCallback(async () => {
    try {
      setLoading(true);
      let id = random(61);
      const response = await fetch(`https://swapi.co/api/planets/${id}/`);
      const planet = await response.json()
      planet.name === 'unknown' ? getPlanets() : setPlanet(planet);
      setLoading(false);
      const film = planet.films.length
      setFilm(film);
    } catch (error) {
      console.log("error - ", error);
      setError(error);
      setLoading(false);
    };

  },[]);

  useEffect(()=>{
    getPlanets();
  },[getPlanets])
  
  const random = num => {
    let number =  Math.floor((Math.random() * (60 - 1)) + 1);
    if(number === 0 || number === undefined)
      this.getRandomNumber(num)
    else
      return number
  }

  function handleClick() {
    getPlanets();
  }

  return (
    <div>
      <Container>

      { error && <p>Error: {JSON.stringify(error)}</p> }

      { loading ? 
      ( <div className="loading"><img src={loader} alt="loading"/>loading</div> ) : (
        <Fragment>
        <figure>
          <h1><span>{planet.name}</span></h1>
          <div>
            <p>Population: <span>{planet.population}</span></p>
            <p>Climate: <span>{planet.climate}</span></p>
            <p>Terrain: <span>{planet.terrain}</span></p>
            <p>Featured in <span>{film}</span> {film <= 1 ? 'film' : 'films'}</p>
          </div>
        </figure>
      
        <Button onClick={handleClick}>
          Next
        </Button>
      </Fragment>
      )}
      </Container>
      <Blink></Blink>
      <Stars></Stars>    
    </div>
  );
}

export default App;