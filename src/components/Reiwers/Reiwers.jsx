import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'shared/api/Api';
import ReiwersList from './ReiwersList/ReiwersList';

export default function Reiwers() {
  const [movieReiwers, setMovieReiwers] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovieReiwers);
  }, [movieId]);

  console.log(movieReiwers);

  if (!movieReiwers) {
    return;
  }

  return <ReiwersList movieReiwers={movieReiwers} />;
}
