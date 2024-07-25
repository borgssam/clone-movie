import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello');
  }
  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('I just updated')
    axios.get('https://yts.mx/api/v2/list_movies.json');
  }
  
  state = {
    count:0,
  };
  
  add = () =>{
    // console.log('add');
    this.setState({count:this.state.count += 1});
    console.log('add'+this.state.count );
  }

  minus = () =>{
    this.setState({count:this.state.count -= 1});
    console.log('minus'+this.state.count);
  }

  render(){
    console.log('render');
    return (
      <div>
        <h1>I'm a class componet {this.state.count} </h1>
        <button onClick={this.add} >Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

}

export default App;

// 20240725085450
// https://yts.mx/api/v2/list_movies.json

// 20240725085624
// https://yts.mx/api/v2/movie_details.json?movie_id=11
