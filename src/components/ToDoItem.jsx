import React from "react";

export default function ToDoItem(props) {

    const { task, handleChange, handleSubmit, errorMessage } = props


  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label-new-task">Add a new task</label>
        <div className="new-task-content">
        <input
          type="text"
          name="content"
          value={task.content}
          onChange={handleChange}
        />
        <select value={task.state} name="state" onChange={handleChange}>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
        </div>
        <button className="btn" type="submit">Add</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
