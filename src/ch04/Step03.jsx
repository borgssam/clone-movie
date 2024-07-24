import {PropTypes} from 'prop-types';
function Food({name, picture, rating}){
  // console.log(props);
  return (<>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} style={{width:'100%'}}/>
  </>)
}

Food.propType ={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.string.isRequired
}

const foodILike = [
  {id:1, name:'김밥', rating:2.9, image:'https://www.aeriskitchen.com/wp-content/uploads/2024/05/Spam_MuSuBi_32-.jpg' },
  {id:2, name:'운동', rating:3.9, image:'https://www.aeriskitchen.com/wp-content/uploads/2024/02/YouTube_Thumbnail_Flashcard_Ep3_Sports.jpg' },
  {id:3, name:'채소', rating:4.9, image:'https://www.aeriskitchen.com/wp-content/uploads/2024/02/YouTube_Thumbnail_Flashcard_Ep2_Vegetables.jpg' },
  {id:4, name:'주택', rating:5.0, image:'https://www.aeriskitchen.com/wp-content/uploads/2024/01/YouTube_Thumbnail_Flashcard_Ep1_Farm_Animals_00-.jpg' },
]


export function Step03() {
  return (
    <div >      
      <h1>Hello!!!!2</h1>
      {foodILike.map(
        item => (          
           <Food key={item.id} name={item.name} picture={item.image} rating={item.rating}/>
        )
      )}
    </div>

  );
}

