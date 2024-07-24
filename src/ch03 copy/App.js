import Potato from "./Potato";
function Food(props){
  console.log(props);
  return <h1>I like {props.fav}</h1>
}
function App() {
  document.title = "새로운 타이틀";
  return (
    <div >      
      <h1>Hello!!!!</h1>
      <Potato/>
      <Food fav='kimch' something={true} papapa={['hello', 1, 2,3,4,true]}/>
      <Food fav='samiopsal' something={true} papapa={['hello', 1, 2,3,4,true]}/>
      <Food fav='chucumi' something={true} papapa={['hello', 1, 2,3,4,true]}/>
    </div>

  );
}

export default App;
