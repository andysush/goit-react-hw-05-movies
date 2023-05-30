import * as APIfilms from 'components/service/tmdb';
import React, { useEffect, useState } from 'react';
import css from './Pages.module.css';
import MovieList from 'components/MovieList/MovieList';

function Home() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    APIfilms.getTrendList()
      .then(data => setMovieData(data.results))
      .catch(() => window.alert('Network Error. Please, try again later'));
  }, []);

  return (
    <>
      <h2 className={css.filmList__title}> Top films: </h2>
      <ul className={css.filmList}>
        <MovieList movieData={movieData} />
      </ul>
    </>
  );
}

export default Home;
