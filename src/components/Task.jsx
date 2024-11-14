import React from 'react';

const Task = ({ task, toggleCompletion, deleteTask }) => {
  if (!task) return <div>No task available</div>;

  const taskDate = new Date(task.dateAdded).toLocaleDateString();

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />
      <h3>{task.title || 'Untitled Task'}</h3>
      <p>Added on: {taskDate}</p>
      <p>Priority: {task.priority || 'None'}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;