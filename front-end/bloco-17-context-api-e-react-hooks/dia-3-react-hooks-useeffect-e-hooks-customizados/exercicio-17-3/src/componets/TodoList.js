import { useState } from "react"


function TodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleChange = ({target}) => {
    setTask(target.value);
  }

  const addTask = () => {
    setTaskList(taskList.concat([task]));
    setTask('');
  }

  return (
    <>    
      <h2>Lista de Tarefas</h2>
      <input 
        type='text'
        value={task}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={addTask}
      >
        Adicionar
      </button>
      <ul>
        {
          taskList.map((t) => <li>{t}</li>)
        }
      </ul>
    </>
  )
}

export default TodoList