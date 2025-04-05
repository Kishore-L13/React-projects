import { useState } from "react"

const Demo2 = () => {
    const [message,SetMessage] = useState("Hello")
    const [filterdata , setFilterData] = useState({ name:"" , testarea:""})
        // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData((prevData) => ({
      ...prevData, // Keep existing values
      [name]: value, // Update changed value
    }));
  };
  const handleSubmit = (e) => {
    alert(`name:${filterdata.name} textarea:${filterdata.testarea}`)
  };
    return (
        <div>
            <h2> this is state - {message}</h2>
            <button onClick={()=>SetMessage("how r u")}>click me</button>
            <form onSubmit={handleSubmit}>
            <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={filterdata.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border p-2 mb-2"
        />
      </div>
      <div>
        <label>Textarea:</label>
        <textarea
          name="testarea"
          value={filterdata.testarea}
          onChange={handleChange}
          placeholder="Enter your text"
          className="border p-2 mb-2"
        />
      </div>
      <p>Data: {JSON.stringify(filterdata)}</p>
      <button type="submit">Submit</button>
    </form>
    </div>
    )
}
export default Demo2