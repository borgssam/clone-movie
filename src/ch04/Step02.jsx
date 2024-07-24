import Potato from "./Potato";
function Food(props){
  console.log(props);
  return (<>
    <h1>I like {props.name}</h1>
    <img src={props.picture} style={{width:'100%'}}/>
  </>)
}

const foodILike = [
  {name:'김밥', image:'https://www.aeriskitchen.com/wp-content/uploads/2024/05/Spam_MuSuBi_32-.jpg' },
  {name:'운동', image:'https://www.aeriskitchen.com/wp-content/uploads/2024/02/YouTube_Thumbnail_Flashcard_Ep3_Sports.jpg' },
  {name:'채소', image:'https://www.aeriskitchen.com/wp-content/uploads/2024/02/YouTube_Thumbnail_Flashcard_Ep2_Vegetables.jpg' },
  {name:'주택', image:'https://www.aeriskitchen.com/wp-content/uploads/2024/01/YouTube_Thumbnail_Flashcard_Ep1_Farm_Animals_00-.jpg' },
]

function renderFood(props){  
  return (<>
    <Food name={props.name} picture={props.image}/>
  </>)
}
export function Step02() {
  return (
    <div >      
      <h1>Hello!!!!2</h1>
      {foodILike.map(               
          renderFood   
      )}
    </div>

  );
}

