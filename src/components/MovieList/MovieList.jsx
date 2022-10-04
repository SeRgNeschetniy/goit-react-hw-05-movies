import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};
