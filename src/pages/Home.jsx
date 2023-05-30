import * as APIfilms from 'components/service/tmdb';
import React, { useEffect, useState } from 'react';
import css from './Pages.module.css';
import MovieList from 'components/MovieList/MovieList';

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    APIfilms.getTrendList()
      .then(data => setMovieData(data.results))
      .catch(err => setErr(err.message));
    setErr('');
  }, []);

  return (
    <>
      <h2 className={css.filmList__title}> Top films: </h2>
      <ul className={css.filmList}>
        {err && <span>Sorry. {err} 😭 Please, try again later</span>}
        <MovieList movieData={movieData} />
      </ul>
    </>
  );
}

export default Home;
