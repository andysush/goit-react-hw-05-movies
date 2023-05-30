import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route
            path="reviews"
            element={
              <div>
                <Reviews />
              </div>
            }
          ></Route>
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// перевірка пошуку на абрукадабру, підключення лодера, помилки, змінити no-pic для фільму
