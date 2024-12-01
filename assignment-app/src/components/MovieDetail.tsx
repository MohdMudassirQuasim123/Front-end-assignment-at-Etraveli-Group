import React from 'react';
import { Movie } from '../types/types';

interface MovieDetailProps {
  selectedMovie: Movie | null;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <p>Select a movie to view details.</p>;
  }
console.log("selectedMovie",selectedMovie)
  return (
    <div className="movie-detail">
      <h2>{selectedMovie.title}</h2>
      {selectedMovie.poster && (
        <img
          src={selectedMovie.poster}
          alt={`${selectedMovie.title} poster`}
          style={{ maxWidth: '200px', marginBottom: '20px' }}
        />
      )}
      <p>Episode: {selectedMovie.episode_id}</p>
      <p>Release Date: {new Date(selectedMovie.release_date).toDateString()}</p>
      <p>Director: {selectedMovie.director}</p>
      <p>Producer: {selectedMovie.producer}</p>
      <h3>Ratings:</h3>
      <ul>
        <li>IMDb: {selectedMovie.ratings.find((r) => r.Source === 'Internet Movie Database')?.Value || 'N/A'}</li>
        <li>Rotten Tomatoes: {selectedMovie.ratings.find((r) => r.Source === 'Rotten Tomatoes')?.Value || 'N/A'}</li>
        <li>Metacritic: {selectedMovie.ratings.find((r) => r.Source === 'Metacritic')?.Value || 'N/A'}</li>
      </ul>
      <p>
        <strong>Average Rating: {selectedMovie.averageRating}</strong>
      </p>
      <p>{selectedMovie.opening_crawl}</p>
    </div>
  );
};

export default MovieDetail;
