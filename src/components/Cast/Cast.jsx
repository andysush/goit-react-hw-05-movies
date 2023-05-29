import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as APIfilms from 'components/service/tmdb';
import noPhoto from '../../images/no_photo.png';

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
    <div>
      {err && <span>Sorry. {err} 😭 Please, try again later</span>}
      <ul>
        {movieCasts.map(({ name, id, profile_path, character }) => (
          <li key={id}>
            <img
              width={50}
              height={75}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : noPhoto
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
