import { FaCheck, FaRegCircle, FaTrash } from "react-icons/fa";
import type { Task } from "../types/task";

type TaskItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <button
        className="icon-button"
        onClick={() => onToggleTask(task.id)}
        aria-label="Toggle task"
      >
        {task.completed ? <FaCheck /> : <FaRegCircle />}
      </button>

      <span>{task.title}</span>

      <button
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label="Delete task"
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TaskItem;
