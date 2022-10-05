import { Container, Description, Poster } from './MovieCard.module';

export default function MovieCard({ movie }) {
  const { poster_path, title, vote_average, overview, genres } = movie;
  return (
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <Description>
        <h1>{title}</h1>
        <p>
          User score :{' '}
          <b>{vote_average ? (movie.vote_average * 100) / 10 : '...'}%</b>
        </p>
        <h2>Overview</h2>
        <p>{overview ? overview : '...'}</p>
        <h2>Genres</h2>
        <p>{genres ? genres.map(item => item.name).join(', ') : '...'}</p>
      </Description>
    </Container>
  );
}
