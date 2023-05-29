import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import SearchForm from 'components/Searchform/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryData, setQueryData] = useState([]);
  const [err, setErr] = useState('');
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    APIfilms.getSearchFilm(query)
      .then(data => setQueryData(data.results))
      .catch(err => setErr(err.message));
  }, [searchParams]);

  const onsubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchForm onSubmit={onsubmit} />
      <ul>
        {err && <span>Sorry. {err} 😭 Please, try again later</span>}
        {queryData.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
