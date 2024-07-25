import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      const { data: { data: { movies } } } = response;
      setMovies(movies);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
};

