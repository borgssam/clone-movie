import React from 'react';

class App extends React.Component {
  state = {
    isLoading:true,
    loadCounter:0 ,
    movies:[],
  }
  componentDidMount(){
    console.log('this.compoentDidMount');
    const loadTimer = setInterval(()=>{
      console.log(this.state.loadCounter);
      this.setState({loadCounter:this.state.loadCounter += 0.5});
      if( this.state.loadCounter > 5){
        this.setState({isLoading:false});
        clearInterval(loadTimer);
      }
    },1000);
  }

  render(){
    console.log('render');
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading? 'loading...' + this.state.loadCounter: 'We are ready'}        
      </div>
 
    );
  }

}

export default App;
