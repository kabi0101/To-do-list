import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">📝 My To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              {task.text}
              <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
