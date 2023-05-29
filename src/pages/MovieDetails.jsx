import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import no_pic from '../images/no_film_img.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);
  const [err, setErr] = useState('');
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    APIfilms.getFilmByID(movieId)
      .then(results => {
        setMovieInfo(results);
        setMovieGenres(results.genres);
      })
      .catch(err => setErr(err.message));
    setErr('');
  }, [movieId]);
  const { title, poster_path, overview } = movieInfo;

  return (
    <div>
      {err && <span>Sorry. {err} 😭 Please, try again later</span>}
      <Link to={backLinkRef.current}>Back</Link>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200/${poster_path}`
            : no_pic
        }
        alt={`${title}`}
      />
      <h1> {title}</h1>
      <p>...</p>
      <h2>Overview</h2>
      <p>{overview ? overview : 'Sorry, no overview about this film'}</p>
      <h2>Genres</h2>
      <div>
        {movieGenres.length > 0
          ? movieGenres.map(genre => <p key={genre.id}>{genre.name}</p>)
          : 'Sorry, no info about genres'}
      </div>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
