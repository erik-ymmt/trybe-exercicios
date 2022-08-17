import './App.css';
import useTimer from './hooks/useTimer';

function App() {
  const {number, isMultiple, timer} = useTimer();

  return (
    <div className="App">
      <p>Será gerado um número aleatório de 1 a 100, se for múltiplo de 3 ou 5, você acerta!</p>
      <h1>
        {number}
      </h1>
      <h3>{ timer }</h3>
        {
          isMultiple
          && <h2>Acerto</h2>
        }
    </div>
  );
}

export default App;
