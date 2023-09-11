import React from "react";

export default function ListTasks(props) {
  const { tasks, handleTaskStateChange, handleDeleteTask } = props;

  return (
    <div className="form-div">
      <h1>All your tasks</h1>
      {tasks.map((task) => {
        return (
          <div
            className="task-list"
            key={task._id}
          >
            <h4 className={`${task.state === "Completed" ? "completed" : "incompleted"}`}>{task.content}</h4>
            <select
              value={task.state}
              onChange={(e) => handleTaskStateChange(e, task._id)}
            >
              <option value="Completed">Completed</option>
              <option value="Incompleted">Incompleted</option>
            </select>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
