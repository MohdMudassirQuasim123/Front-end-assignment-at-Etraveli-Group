import React from 'react';
import { Movie } from '../types/types';

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div 
          key={movie.episode_id} 
          className="movie-item"
          onClick={() => onMovieSelect(movie)}
        >
          <h3>{movie.title}</h3>
          <p>Episode {movie.episode_id}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
