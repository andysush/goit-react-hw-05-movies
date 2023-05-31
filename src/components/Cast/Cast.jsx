import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import noPhoto from '../../images/no_photo.png';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    APIfilms.getCast(movieId)
      .then(data => setMovieCasts(data.cast))
      .catch(() => window.alert('Network Error. Please, try again later'));
  }, [movieId]);

  return (
    <section className={css.cast__box}>
      {movieCasts.length > 0 ? (
        <ul>
          {movieCasts.map(({ name, id, profile_path, character }) => (
            <li key={id} className={css.cast__item}>
              <img
                className={css.cast__img}
                width={50}
                height={75}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noPhoto
                }
                alt={name}
              />
              <p className={css.cast__text}>{name}</p>
              <p className={css.cast__text}>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have info about actors for this movie.</p>
      )}
    </section>
  );
};

export default Cast;
