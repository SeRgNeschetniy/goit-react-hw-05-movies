import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};
