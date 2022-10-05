import {
  Container,
  Description,
  Poster,
  Wrapper,
  NavTab,
  Link,
  WrapperDesc,
} from 'components/MovieCard/MovieCard.module';
import { Outlet } from 'react-router-dom';
import imgPlaceholder from 'images/img-placeholder.png';

export default function MovieCard({ movie }) {
  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = movie;

  const backdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
  return (
    <>
      <Container backdrop_path={backdrop}>
        <Wrapper>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : imgPlaceholder
            }
          />
          <Description>
            <h1>{title}</h1>
            <p>
              <b>{release_date}</b>
            </p>
            <p>
              User score :{' '}
              <b>
                {vote_average ? Math.round((vote_average * 100) / 10) : '...'}%
              </b>
            </p>
            <h2>Overview</h2>
            <p>{overview ? overview : '...'}</p>
            <h2>Genres</h2>
            <p>{genres ? genres.map(item => item.name).join(', ') : '...'}</p>
          </Description>
        </Wrapper>
      </Container>
      <WrapperDesc>
        <NavTab>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reiwers">Reiwers</Link>
          </li>
        </NavTab>
        <Outlet />
      </WrapperDesc>
    </>
  );
}
