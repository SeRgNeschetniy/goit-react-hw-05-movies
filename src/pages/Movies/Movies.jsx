import { MovieList } from 'components/MovieList/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovie } from 'shared/api/Api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

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
        //      setLoading(true);
        //    setError(null);

        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (error) {
        //     setError(error);
      } finally {
        //     setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <SearchBox value={query} onChange={updateQuery} />
      <MovieList movies={movies} />
    </div>
  );
}
