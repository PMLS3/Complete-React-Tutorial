import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";
// function App() {
//   const [ninjas, setNinjas] = useRef([
//     { name: "Yoshi", age: 30, belt: "Black", id: 1 },
//     { name: "Bark", age: 44, belt: "Blue", id: 2 },
//     { name: "Yoshi", age: 33, belt: "Brown", id: 3 },
//   ]);
//   // state = {
//   //   ninjas: [
//   //     { name: "Yoshi", age: 30, belt: "Black", id: 1 },
//   //     { name: "Bark", age: 44, belt: "Blue", id: 2 },
//   //     { name: "Yoshi", age: 33, belt: "Brown", id: 3 },
//   //   ],
//   // };
//   return (
//     <div className="App">
//       <h1>My First React App!</h1>
//       <p>Welcome :)</p>
//       <Ninjas ninjas={ninjas} />
//       {/* <Ninjas name="Yoshi" age="45" belt="black" /> */}
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    ninjas: [
      { name: "Yoshi", age: 30, belt: "Black", id: 1 },
      { name: "Bark", age: 44, belt: "Blue", id: 2 },
      { name: "Yoshi", age: 33, belt: "Brown", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
