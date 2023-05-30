import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import SearchForm from 'components/Searchform/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import css from './Pages.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryData, setQueryData] = useState([]);
  const [err, setErr] = useState('');
  // const location = useLocation();

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
      <ul className={css.filmList}>
        {err && <span>Sorry. {err} 😭 Please, try again later</span>}
        <MovieList movieData={queryData} />
      </ul>
    </div>
  );
};

export default Movies;
