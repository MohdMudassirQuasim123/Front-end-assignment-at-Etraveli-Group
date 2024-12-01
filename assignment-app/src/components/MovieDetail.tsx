import React from 'react';
import { Movie } from '../types/types';

interface MovieDetailProps {
  selectedMovie: Movie | null;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <p>Select a movie to view details.</p>;
  }

  return (
    <div className="movie-detail">
      <h2>{selectedMovie.title}</h2>
      <p>Episode: {selectedMovie.episode_id}</p>
      <p>Release Date: {new Date(selectedMovie.release_date).toDateString()}</p>
      <p>Director: {selectedMovie.director}</p>
      <p>Producer: {selectedMovie.producer}</p>
      <p>{selectedMovie.opening_crawl}</p>
    </div>
  );
};

export default MovieDetail;
