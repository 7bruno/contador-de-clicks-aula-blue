import { useState, useEffect } from 'react';
import './App.css';
import { ButtonComponent } from './components/button-component';

function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(()=>{console.log('effect')}, [clicks]);

  const addClicks = ()=>{
    setClicks(clicks+1);
    console.log(clicks);
  }

  const subClicks = ()=>{
    setClicks(clicks-1);
    console.log(clicks);
  }

  return (
    <div className="App">
      <ButtonComponent onClick={addClicks} >Adicionar</ButtonComponent>
      <ButtonComponent onClick={subClicks} >Subtrair</ButtonComponent>
      <h1>{clicks!==0?`resumo dos clicks: ${clicks}`:'sem click identificado'}</h1>
    </div>
  );
}

export default App;
