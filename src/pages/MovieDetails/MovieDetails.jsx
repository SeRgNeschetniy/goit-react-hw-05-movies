import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from 'shared/api/Api';
import { Container, Description, Poster } from './MovieDetails.module';

export default function MovieDetails() {
  const [Movie, setMovie] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieById(movieId);
        setMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = Movie;
  console.log('data', Movie);

  return (
    <Container>
      {Movie && (
        <>
          <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
          <Description>
            <h1>{title}</h1>
            <p>
              User score : <b>{vote_average ? vote_average : '...'}</b>
            </p>
            <h2>Overview</h2>
            <p>{overview ? overview : '...'}</p>
            <h2>Genres</h2>
            <p>{genres ? genres.map(item => item.name).join(', ') : '...'}</p>
          </Description>
        </>
      )}
    </Container>
  );
}
