import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaClipboardList } from "react-icons/fa";

import AddTaskForm from "./components/AddTaskForm";
import IdleTimer from "./components/IdleTimer";
import TaskList from "./components/TaskList";
import type { Task } from "./types/task";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const initialTasks: Task[] = [
  { id: 1, title: "Learn React Icons", completed: false },
  { id: 2, title: "Use React Toastify", completed: false },
  { id: 3, title: "Try React Idle Timer", completed: true },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    toast.success("Task added successfully!");
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    toast.info("Task status changed.");
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.error("Task deleted.");
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <IdleTimer />

      <section className="hero">
        <div className="hero-icon">
          <FaClipboardList />
        </div>

        <h1>Task Focus App</h1>
        <p>
          React project with React Icons, React Toastify and React Idle Timer.
        </p>
      </section>

      <section className="stats">
        <div>
          <span>{tasks.length}</span>
          <p>Total tasks</p>
        </div>

        <div>
          <span>{completedTasks}</span>
          <p>Completed</p>
        </div>

        <div>
          <span>{tasks.length - completedTasks}</span>
          <p>Active</p>
        </div>
      </section>

      <section className="task-card">
        <AddTaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>

      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </main>
  );
}

export default App;
