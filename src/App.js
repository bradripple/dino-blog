import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dino from './Dino';
import Reptile from './Reptile';

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: [
      {
        username: "Bradley Ripple",
        comment: "First!"
      },
      {
        username: "Bradley Ripple",
        comment: "Great post"
      },
      {
        username: "Bradley Ripple",
        comment: "Hire this author now!"
      },
    ]
  }
  let rep = {
    title: "Ancient Reptiles",
    author: "Creative Crocodile",
    body: "Check out this list of Ancient Reptiles",
    comments: [
      {
        username: "Bradley Ripple",
        comment: "Crocodiles"
      },
      {
        username: "Bradley Ripple",
        comment: "Snakes"
      },
      {
        username: "Bradley Ripple",
        comment: "Bees"
      },
      {
        username: "Bradley Ripple",
        comment: "Sharks"
      },
      {
        username: "Bradley Ripple",
        comment: "Horseshoe Crabs"
      },
      {
        username: "Bradley Ripple",
        comment: "Sea Stars"
      },
      {
        username: "Bradley Ripple",
        comment: "Lobsters"
      },
      {
        username: "Bradley Ripple",
        comment: "Duck Billed Platypus"
      },
      {
        username: "Bradley Ripple",
        comment: "Tuatara"
      },
      {
        username: "Bradley Ripple",
        comment: "Cockroaches"
      },
    ]
  }

  
  return (
    <div className="App">
      <Dino title={dino.title} author={dino.author} body={dino.body} comments={dino.comments}/>
      <Reptile title={rep.title} author={rep.author} body={rep.body} comments={rep.comments}/>
    </div>
  );
}

export default App;
