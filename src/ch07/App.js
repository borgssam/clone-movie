import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }

  state = {
    isLoading:true,
    movies:[],
  };
  getMovies = async ()=>{
    // const _data = await axios.get('https://yts.mx/api/v2/list_movies.json');
    const _data = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    const { data:{data:{movies},}} = _data;
    this.setState({movies:movies, isLoading:false});
    console.log(movies);
  };
  componentDidMount(){
    console.log('component rendered');
    this.getMovies();
  }

  componentDidUpdate(){
    console.log('I just updated')
  }

  render() {
    console.log('render');
    const { isLoading, movies } = this.state;

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
  }
}


export default App;

// 20240725085450
// https://yts.mx/api/v2/list_movies.json

// 20240725085624
// https://yts.mx/api/v2/movie_details.json?movie_id=11
