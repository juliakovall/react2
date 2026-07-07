# Task Focus App

## Description

Task Focus App is a React application built with Vite and TypeScript.

The application allows users to manage a simple task list while demonstrating the use of several popular React libraries:

- React Icons
- React Toastify
- React Idle Timer

Users can add new tasks, mark them as completed, delete tasks, receive notifications, and get notified when they are inactive.

---

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Task statistics
- Success, information, warning, and error notifications
- User inactivity detection
- Responsive interface

---

## Technologies

- React
- TypeScript
- Vite
- CSS
- React Icons
- React Toastify
- React Idle Timer

---

## Libraries Used

### React Icons

Used for displaying icons in buttons and interface elements.

### React Toastify

Used to display notifications when:

- a task is added;
- a task is completed;
- a task is deleted;
- the user returns after being idle.

### React Idle Timer

Tracks user inactivity.

If the user is inactive for 10 seconds, a warning notification is displayed.
When the user becomes active again, an informational notification appears.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/juliakovall/react2.git
```

Go to the project folder:

```bash
cd react2/lesson51
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser:

```
http://localhost:5173
```

---

## Build

```bash
npm run build
```

---

## Project Structure

```
src
│
├── components
│   ├── AddTaskForm.tsx
│   ├── IdleTimer.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
│
├── types
│   └── task.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## GitHub Repository

## https://github.com/juliakovall/react2/tree/main/lesson51

## Author

Julia Koval
