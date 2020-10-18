import React, { Component } from "react";
import Ninjas from "./Ninjas";

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

  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
