import './App.css';
import Dino from './Dino';
import Reptile from './Reptile';

function App() {
  let dino = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  let rep = {
    title: "Ancient Reptiles",
    author: "Creative Crocodile",
    body: "Check out this list of Ancient Reptiles",
    comments: ["Crocodiles", "Snakes", "Bees", "Sharks", "Horseshoe Crabs", "Sea Stars", "Lobsters", "Duck Billed Platypus", "Tuatara", "Cockroaches"]
  }
  return (
    <div className="App">
      <Dino title={dino.title} author={dino.author} body={dino.body} comments={dino.comments}/>
      <Reptile title={rep.title} author={rep.author} body={rep.body} comments={rep.comments}/>
    </div>
  );
}

export default App;
