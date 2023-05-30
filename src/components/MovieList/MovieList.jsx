import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movieData }) => {
  const location = useLocation();

  return (
    <>
      {movieData.map(({ id, title }) => {
        return (
          <li key={id} className={css.movieList__item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MovieList;
