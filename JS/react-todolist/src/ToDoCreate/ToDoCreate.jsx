import React, { useState } from "react";

const ToDoCreate = ({ add }) => {
    const [newTask, setNewTask] = useState("");

    return(
        <div>
            <input type="text"
                   placeholder="Task"
                   className="todoInput"
                   value={newTask}
                   onChange={e => setNewTask(e.target.value)}/>
            <input type="submit"
                   value="+"
                   className="addButton"
                   onClick={() => {
                add(newTask);
                setNewTask("");
            }}/>
        </div>
    );
}

export default ToDoCreate;