import './App.css';
import ToDoCreate from "./ToDoCreate/ToDoCreate";
import ToDos from "./ToDos/ToDos";
import React, {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {id: 0, value: "Task 1"},
        {id: 1, value: "Task 2"},
        {id: 2, value: "Task 3"},
        {id: 3, value: "Task 4"}
    ]);

    let deleteTaskById = id => {
        let tmp = [...tasks];
        setTasks(tmp.filter(t => t.id !== id));

    }

    let handleCreate = newTaskValue => {
        if (newTaskValue !== ""){
            let id;
            let generated = false;
            do {
                id = Math.ceil(Math.random() * 10000);
                if (tasks.filter(t => t.id === id).length === 0) generated = true;
            } while (!generated);
            setTasks([...tasks, {id: id, value: newTaskValue} ]);
        }
    }

  return (
    <div className="App">
      <ToDoCreate add={handleCreate}/>
      <ToDos tasks={[...tasks]} deleteTaskById={deleteTaskById}/>
    </div>
  );
}

export default App;
