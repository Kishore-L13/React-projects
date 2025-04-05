import { useState, useCallback } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null); // Tracks the ID of the todo being edited
  const [editValue, setEditValue] = useState(''); // Stores the edited value

  // Adds a new todo
  const handleAddTodo = useCallback(() => {
    if (inputValue.trim()) {
      setTodos(prevTodos => [
        ...prevTodos,
        { id: Date.now(), text: inputValue, completed: false } // Unique ID
      ]);
      setInputValue('');
    }
  }, [inputValue]);

  // Toggles the completion status
  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Deletes a todo
  const deleteTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  // Enables editing mode for a todo
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };

  // Updates the todo after editing
  const handleUpdateTodo = () => {
    if (editValue.trim()) {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === editingId ? { ...todo, text: editValue } : todo
        )
      );
      setEditingId(null); // Exit editing mode
      setEditValue('');
    }
  };

  return (
    <div className='heading'>
      <h1><u>Todo List</u></h1>
      <div className='input-container'>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new task"
          onChange={(e) => setInputValue(e.target.value)}
          className='text'
        />
        <button onClick={handleAddTodo} className='add-button'>
          ➕ Add
        </button>
      </div>
      <ul className="ul">
        {todos.map((todo) => (
          <li key={todo.id} className='li' style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: "10px" }}
            />
            {editingId === todo.id ? (
              // Show input field if editing
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUpdateTodo()}
                autoFocus
                className="edit-input"
                style={{ flex: 1, marginRight: '10px' }}
              />
            ) : (
              <span
                onClick={() => toggleTodo(todo.id)}
                className='toggle'
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                {todo.text}
              </span>
            )}
            {editingId === todo.id ? (
              <span onClick={handleUpdateTodo} className='save-btn'>✔</span>
            ) : (
              <>
      <span onClick={() => handleEdit(todo.id, todo.text)} className='edit-btn'>🖊️</span>
                <span
              onClick={() => deleteTodo(todo.id)}
              className='trash-btn'
            ><span class="paper">📄</span> 🗑️ 
            </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
