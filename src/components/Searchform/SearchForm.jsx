import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
