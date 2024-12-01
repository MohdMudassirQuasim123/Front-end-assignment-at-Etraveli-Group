import React, { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import { Movie } from '../types/types';

const Home = () => {
  const { movies, loading } = useFetchMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="home-layout">
      <div className="left-pane">
        <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
      </div>
      <div className="right-pane">
        <MovieDetail selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default Home;
