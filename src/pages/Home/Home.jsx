import { getTrendingMovies } from 'shared/api/Api';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  //  const [error, setError] = useState(null);
  //  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        //      setLoading(true);
        //    setError(null);

        const result = await getTrendingMovies();
        setMovies(result.results);
      } catch (error) {
        //     setError(error);
      } finally {
        //     setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return;
  }

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
}
