import React, { useState } from 'react';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;

// interface
interface ITask {
  name: string,
  done: boolean,
}

function App(): JSX.Element {
  // Tasks
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])


  // Function
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask)
    console.log(tasks)

    // update Task
    setNewTask('');
  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name: name, done: false}]
    setTasks(newTasks)
  }


  const toggleDoneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  return (
    <div className='container'>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} className="form-control" autoFocus />
            <button className="button-submit">
              Save
            </button>
            <h2>minuto 32:38 segundos</h2>
          </form>
        </div>
      </div>

      {
        tasks.map((t: ITask, i: number) => (
          <div className="result" key={i}>
            <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
            <div>
               <button 
                className='btn btn-secondary'
                onClick={() => toggleDoneTask(i)}
              >
                  {t.done ? '📴' : '✖️'}
               </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
