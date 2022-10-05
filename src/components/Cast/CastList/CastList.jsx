import React from 'react';

export default function CastList({ movieCast }) {
  console.log(movieCast);
  const movieCastList = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;

    return (
      <li key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://klpmotors.ru/tpl/palitra/images/nophoto.jpg'
          }
          alt={original_name}
        />
        <p>Name: {original_name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return <ul>{movieCastList}</ul>;
}