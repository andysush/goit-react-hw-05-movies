import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [err, setErr] = useState('');
  useEffect(() => {
    APIfilms.getReviews(movieId)
      .then(data => setMovieReviews(data.results))
      .catch(err => setErr(err.message));
    setErr('');
  }, [movieId]);

  return (
    <div>
      {err && <span>Sorry. {err} 😭 Please, try again later</span>}
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
