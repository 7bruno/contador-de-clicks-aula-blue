import { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const addClicks = ()=>{
    setClicks(clicks+1);
    console.log(clicks);
  }

  return (
    <div className="App">
      <button onClick={addClicks} >Adicionar</button>
      <h1>{clicks}</h1>
    </div>
  );
}

export default App;
