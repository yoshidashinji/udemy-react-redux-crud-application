import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     // const greeting = "Hi!, Tom"
//     // const dom = <h1>{greeting}</h1>;
//     // return dom;

//     // return <h1>Hello, world!</h1>;

//     // return <input type="text" onChange={() => {console.log("I am changed!")}} />;
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am changed!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return <div>Meow!</div>;
}
export default App;
