import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import SearchForm from 'components/Searchform/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryData, setQueryData] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    APIfilms.getSearchFilm(query)
      .then(data => setQueryData(data.results))
      .catch(() => window.alert('Network Error. Please, try again later'));
  }, [searchParams]);

  const onsubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchForm onSubmit={onsubmit} />
      {queryData && <MovieList movieData={queryData} />}
      {queryData?.length === 0 && (
        <p>Sorry. There is no films with your request</p>
      )}
    </div>
  );
};

export default Movies;
