import React, { useState, useMemo } from 'react';
import { useFetchMovies } from './hooks/useFetchMovies';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SortControls from './components/SortControls';
import FilterInput from './components/FilterInput';
import { Movie } from './types/types';

const App = () => {
  const { movies, loading } = useFetchMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<'release_date' | 'episode_id'>('release_date');

  // Filtered and sorted movies
  const filteredMovies = useMemo(() => {
    let result = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (sortKey === 'release_date') {
      result.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    } else if (sortKey === 'episode_id') {
      result.sort((a, b) => a.episode_id - b.episode_id);
    }

    return result;
  }, [movies, filter, sortKey]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="app-layout">
      <div className="controls">
        <FilterInput onFilterChange={setFilter} />
        <SortControls onSortChange={setSortKey} />
      </div>
      <div className="main-content">
        <div className="left-pane">
          <MovieList movies={filteredMovies} onMovieSelect={setSelectedMovie} />
        </div>
        <div className="right-pane">
          <MovieDetail selectedMovie={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default App;
