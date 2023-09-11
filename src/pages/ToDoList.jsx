import React, { useEffect, useState } from "react";
import taskService from "../services/taskService";
import ToDoItem from "../components/ToDoItem";
import ListTasks from "../components/ListTasks";

export default function ToDoList() {
  const initialState = {
    content: "",
    state: "Incompleted",
  };

  const [task, setNewTask] = useState(initialState);

  const [tasks, setTasks] = useState([]);

  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleChange = (e) => {
    setNewTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await taskService.createTask(task);
      setTasks((prevTask) => [...prevTask, newTask.data]);
      setNewTask(initialState);
    } catch (error) {
      setErrorMessage("An error occurred creating a new task");
    }
  };

  const getTasks = async () => {
    try {
      const response = await taskService.getTasks();
      setTasks(response);
    } catch (error) {
      setErrorMessage("An error occurred getting all tasks");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks((prevTask) => prevTask.filter((task) => task._id !== taskId));
    } catch (error) {
      setErrorMessage("Cannot delete task");
    }
  };

  const handleTaskStateChange = async (e, taskId) => {
    const newState = e.target.value;

    try {
      await taskService.updatedStateTask(taskId, newState);

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, state: newState } : task
        )
      );
    } catch (error) {
      setErrorMessage("Error updating the task state");
    }
  };

  return (
    <div>
      <ToDoItem
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
      <ListTasks
        tasks={tasks}
        handleTaskStateChange={handleTaskStateChange}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
