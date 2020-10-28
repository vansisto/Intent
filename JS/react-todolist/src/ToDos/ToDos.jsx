import React from "react";
import Task from "./Task/Task";

const ToDos = props => {
    const { tasks, deleteTaskById } = props;

    return(
        <div>
            <div className="toDos">
                {tasks.map(t => <Task key={t.id} task={t} deleteTaskById={deleteTaskById} />)}
            </div>
        </div>
    );
}

export default ToDos;
