import { useState, type FormEventHandler } from "react";
import { FaPlus } from "react-icons/fa";

type AddTaskFormProps = {
  onAddTask: (title: string) => void;
};

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask(title);
    setTitle("");
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">
        <FaPlus />
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm;
