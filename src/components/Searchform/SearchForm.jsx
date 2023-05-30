import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = ev => {
    setQuery(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    if (!query) {
      window.alert('Please enter your request ');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <section className={css.search__section}>
      <form onSubmit={handleSubmit} className={css.search__form}>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className={css.search__input}
        />
        <button type="submit" className={css.search__btn}>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
