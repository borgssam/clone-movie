import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const _data = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      const { data: { data: { movies } } } = _data;
      setMovies(movies);
      setIsLoading(false);
      console.log(movies);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('component rendered');
    getMovies();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함

  useEffect(() => {
    console.log('I just updated');
  }, [movies]); // movies 상태가 변경될 때 실행되도록 함

  console.log('render');

  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            console.log(movie);
            return (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default App;


// 20240725085450
// https://yts.mx/api/v2/list_movies.json

// 20240725085624
// https://yts.mx/api/v2/movie_details.json?movie_id=11
