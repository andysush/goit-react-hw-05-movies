import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import noPhoto from '../../images/no_photo.png';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    APIfilms.getCast(movieId)
      .then(data => setMovieCasts(data.cast))
      .catch(err => setErr(err.message));
    setErr('');
  }, [movieId]);

  return (
    <section className={css.cast__box}>
      {err && <span>Sorry. {err} 😭 Please, try again later</span>}
      <ul>
        {movieCasts.length > 0 ? (
          movieCasts.map(({ name, id, profile_path, character }) => (
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
          ))
        ) : (
          <p>We don't have info about actors for this movie.</p>
        )}
      </ul>
    </section>
  );
};

export default Cast;
