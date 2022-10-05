import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'shared/api/Api';
import CastList from 'components/CastList/CastList';

export default function Cast() {
  const [movieCast, setMovieCast] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return <CastList movieCast={movieCast} />;
}
