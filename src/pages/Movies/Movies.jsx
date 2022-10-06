import { MovieList } from 'components/MovieList/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'shared/api/Api';
import Notify from 'shared/components/Notify/Notify';
import Loader from 'shared/components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (e) {
        setError(e.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      {loading && <Loader />}
      {error && <Notify msg={error} />}
      <SearchBox value={query} onChange={updateQuery} />
      <MovieList movies={movies} />
    </div>
  );
}
