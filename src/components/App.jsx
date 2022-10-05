import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.module';
import AppBar from './AppBar/AppBar';
import Cast from './Cast/Cast';
import Reviews from './Reiwers/Reiwers';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reiwers" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
