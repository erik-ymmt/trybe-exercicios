import './App.css';
import TodoList from './componets/TodoList';
import useTimer from './hooks/useTimer';

function App() {
  const {number, isMultiple, timer} = useTimer();

  return (
    <div className="App">
      <h1>Exercício 1:</h1>
      <p>Será gerado um número aleatório de 1 a 100, se for múltiplo de 3 ou 5, você acerta!</p>
      <h1>
        {number}
      </h1>
      <h3>{ timer }</h3>
        {
          isMultiple
          ? <p>Acerto</p>
          : <p>Aguarde</p>
        }

      <h1>Exercício 2:</h1>
      <TodoList />
    </div>
  );
}

export default App;
