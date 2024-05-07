import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");

  const handleNameChange = () => {
    let names = ["Neelesh", "Sachi", "Geetha"];
    let i = Math.floor(Math.random() * 3);
    // return names[i];
    setName(names[i]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleNameChange}>Change Name</button>
        <p>Hello, {name}</p>

      </header>
    </div>
  );
}

export default App;
