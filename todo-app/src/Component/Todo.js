import {useState} from 'react'
const Todo = () => {
    // State for the list of todos and the current input value.
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Adds a new todo item if the input is not empty.
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(''); // clear input after adding
    }
  };

  // Toggles the completion status of a todo item.
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Deletes a todo item from the list.
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo,i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='heading' >
      <h1><u>Todo-List</u></h1>
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
        {todos.map((todo, index) => (
          <li key={index} className='li'>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              style={{ marginRight: "10px" }}
            />
            <span
              onClick={() => toggleTodo(index)}
              className='toogle'
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              flex:1
              }}
            >
              <div style={{display:'flex'}}>{index + 1} . {todo.text}</div>
            </span>
            <span
              onClick={() => deleteTodo(index)}
              className='trash-btn'
            ><span class="paper">📄</span> 🗑️ 
            </span>
          </li>
        ))}
      </ul>
    </div>
    )
}
export default Todo