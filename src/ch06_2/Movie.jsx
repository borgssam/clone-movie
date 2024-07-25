import React from 'react';
import PropTypes from 'prop-types';
import './App.css';


 function Movie({id, title, year, summary, poster}){
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title}/>
      
      <div className='movie_data'>  
        <h3 className='movie_title' style={{ backgroundColor:'red'}}>{title}</h3>
        <h3 className='movie_year'>{year}</h3>
        <h3 className='movie_summary'>{summary}</h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;