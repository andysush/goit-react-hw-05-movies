import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    APIfilms.getReviews(movieId)
      .then(data => setMovieReviews(data.results))
      .catch(() => window.alert('Network Error. Please, try again later'));
  }, [movieId]);

  return (
    <div className={css.reviews__box}>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3 className={css.reviews__name}>Author: {author}</h3>
              <p className={css.reviews__text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
