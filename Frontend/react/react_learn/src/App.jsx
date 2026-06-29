import './App.css'
import Card from './components/Card'
import Message from './components/message';

const Cards = [
    {
      id: 1,
      img: "https://placehold.co/150",
      title: "Batman",
      description: "The Dark Knight of Gotham."
    },
    {
      id: 2,
      img: "https://placehold.co/150",
      title: "Superman",
      description: "The Man of Steel."
    },
    {
      id: 3,
      img: "https://placehold.co/150",
      title: "Wonder Woman",
      description: "The Amazonian Princess."
    }
  ];

const msgs = [
  {
    id: 1,
    userName: "Mehul",
    clr : {color:"Yellow"}
  },

  {
    id: 2,
    userName: "Yash G",
    clr: {color:"pink"}
  }

];

function App() {

  return (
  <>
    {
      Cards.map((card)=>(
        <Card 
          img = {card.img} 
          title = {card.title} 
          description ={card.description} 
          key = {card.id}
        />
      ))
    
}
  
{

    msgs.map((msg)=>(
        <Message userName = {msg.userName} key = {msg.id} clr = {msg.clr}/>
    ))

}

  </>
  )
}

export default App



