import * as APIfilms from 'components/service/tmdb';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [err, setErr] = useState('');
  const location = useLocation();

  useEffect(() => {
    APIfilms.getTrendList()
      .then(({ results }) => setMovieData([...results]))
      .catch(err => setErr(err.message));
    setErr('');
  }, []);

  return (
    <ul>
      {err && <span>Sorry. {err} 😭 Please, try again later</span>}
      {movieData.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Home;
