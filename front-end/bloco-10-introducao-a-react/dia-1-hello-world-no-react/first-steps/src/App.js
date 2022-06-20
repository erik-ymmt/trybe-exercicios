import './App.css';
import React from 'react';

const CreateTaskItem = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['correr', 'estudar', 'ler']
const createList = () => taskList.map((task) => CreateTaskItem(task));

class App extends React.Component {
  render() {
    return <ol>{ createList() }</ol>
  }
  
}

export default App;
