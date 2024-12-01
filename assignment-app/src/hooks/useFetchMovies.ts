import { useState, useEffect } from 'react';
import { Movie } from '../types/types';

const OMDB_API_KEY = 'b9a5e69d'; // Your API key

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRatingsAndPosters = async (movies: Movie[]) => {
    const enhancedMovies = await Promise.all(
      movies.map(async (movie) => {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movie.title)}`
          );
          const data = await response.json();
          return {
            ...movie,
            poster: data.Poster || '',
            ratings: data.Ratings || [],
            averageRating: calculateAverageRating(data.Ratings || []),
          };
        } catch (error) {
          console.error(`Error fetching OMDB data for ${movie.title}:`, error);
          return movie; // Return the original movie if OMDB fetch fails
        }
      })
    );
    return enhancedMovies;
  };

  const calculateAverageRating = (ratings: { Source: string; Value: string }[]) => {
    const sources = {
      imdb: ratings.find((r) => r.Source === 'Internet Movie Database'),
      rt: ratings.find((r) => r.Source === 'Rotten Tomatoes'),
      metacritic: ratings.find((r) => r.Source === 'Metacritic'),
    };

    const imdbRating = sources.imdb ? parseFloat(sources.imdb.Value.split('/')[0]) : 0;
    const rtRating = sources.rt ? parseFloat(sources.rt.Value.replace('%', '')) : 0;
    const metacriticRating = sources.metacritic ? parseFloat(sources.metacritic.Value.split('/')[0]) : 0;

    const totalRatings = [imdbRating, rtRating, metacriticRating].filter((rating) => rating > 0);
    if (totalRatings.length === 0) return 'N/A';

    const average = totalRatings.reduce((acc, rating) => acc + rating, 0) / totalRatings.length;
    return average.toFixed(1);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://swapi.dev/api/films/?format=json');
        const data = await response.json();
        const enhancedMovies = await fetchRatingsAndPosters(data.results);
        setMovies(enhancedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading };
};
