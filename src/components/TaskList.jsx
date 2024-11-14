import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === 'priority') {
      const priorityMap = { high: 1, medium: 2, low: 3 };
      return priorityMap[a.priority] - priorityMap[b.priority];
    }
    if (sortOption === 'name') return a.title.localeCompare(b.title);
    if (sortOption === 'date') return new Date(a.dateAdded) - new Date(b.dateAdded);
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="priority">Priority</option>
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
      <div>
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;