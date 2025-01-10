import React from "react";
import logo from './logo.svg';
import './App.css';
import NodeFarm from "./NodeFarm";

function App() {
  const [data, setData] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [hello, setHello] = React.useState(null);


  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    fetch("http://localhost:3001/hello")
      .then((res) => res.json())
      .then((data) => setHello(data));

    fetch("http://localhost:3001/name")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p><span>{hello}  </span><span>{name}</span></p>
      </header>
      <NodeFarm></NodeFarm>
    </div>
  );
}

export default App;
