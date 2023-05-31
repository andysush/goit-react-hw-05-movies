import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import no_pic from '../../images/no_image_av.jpeg';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    APIfilms.getFilmByID(movieId)
      .then(results => {
        setMovieInfo(results);
      })
      .catch(() => window.alert('Network Error. Please, try again later'));
  }, [movieId]);
  if (!movieInfo) return;
  const { title, poster_path, overview, vote_average, release_date, genres } =
    movieInfo;

  return (
    <div>
      <Link to={backLinkRef.current} className={css.film__backBtn}>
        &#10229; Back
      </Link>
      <div className={css.film__card}>
        <img
          width={200}
          className={css.film__img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : no_pic
          }
          alt={`${title}`}
        />
        <div className={css.film__info}>
          <h2 className={css.film__title}>
            {title} ({release_date?.substr(0, 4)})
          </h2>
          <p className={css.film__score}>
            User score: {Math.round(vote_average * 10) + `%`}
          </p>
          <h3 className={css.film__overview}>Overview</h3>
          <p className={css.film__text}>
            {overview ? overview : 'Sorry, no overview for this film'}
          </p>
          <h3 className={css.genres}>Genres</h3>
          <div className={css.genres__list}>
            {genres.length > 0
              ? genres.map(genre => <p key={genre.id}>{genre.name}</p>)
              : 'Sorry, no info about genres'}
          </div>
        </div>
      </div>
      <div className={css.info__box}>
        <h2 className={css.info__title}>Additional Information</h2>
        <ul>
          <li className={css.info__submenu}>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li className={css.info__submenu}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
