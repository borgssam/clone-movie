import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className='movie'>
 {/*      <Link 
        to={{
          pathname: '/movie-detail',
          state: { year, title, summary, poster, genres },
        }}
      >     */}
      <Link to={`/movie-detail?year=${year}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}&poster=${encodeURIComponent(poster)}&genres=${encodeURIComponent(genres.join(','))}`}>
 
        <img src={poster} alt={title} />
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <h5 className='movie_year'>{year}</h5>
          <p className='movie_summary'>{summary.slice(0, 180)}...</p>
          <ul className='movie_genres'>
            {genres.map((genre, index) => (
              <li key={index} className='movie_genre'>{genre}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
