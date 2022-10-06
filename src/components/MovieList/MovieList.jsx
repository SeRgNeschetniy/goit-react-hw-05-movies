import { Link } from 'react-router-dom';
import imgPlaceholder from 'images/img-placeholder.png';
import { MovieWrapp, MovieItem } from './MovieList.module';

export const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title, poster_path }) => (
    <MovieItem key={id}>
      <Link to={`/movies/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : imgPlaceholder
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </MovieItem>
  ));

  return <MovieWrapp>{elements}</MovieWrapp>;
};
