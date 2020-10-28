import React from "react";

const Task = ({ task, deleteTaskById }) => {
    return(
        <div>
            <span className="taskItem">{task.value}</span>
            <input type="submit" className="deleteButton" value="-" onClick={() => deleteTaskById(task.id)}/>
        </div>
    );
}

export default Task;
