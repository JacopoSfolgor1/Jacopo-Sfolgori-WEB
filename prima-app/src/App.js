
import './App.css';
import Clock from './Clock';
import Componente1 from './Componente1';

function getDate(date){
  return date.toLocaleDateString()+ " " + date.toLocaleTimeString('en-US')
}

function App() {
  let nome= "Roberto";
  return (
    <div className="App">
      <h1>Primo elemento {nome}</h1>
      <Componente1>Roberto</Componente1>
      <Componente1/>
    <h2>
    {
      new Date().toLocaleDateString()+ " " + new Date().toLocaleTimeString('en-US')
    }
      </h2>
     <h2>{getDate(new Date())}</h2>
      
        <Clock timezone="0" country="Italy"></Clock>
        <Clock timezone="-6" country="USA"></Clock>
        <Clock timezone="8" country="Japan"></Clock>
    </div>
  );
}

export default App;
