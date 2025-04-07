import React, { useState } from 'react';
const data = [
  { id: 1, name: 'Abc', phone: '1234567890' },
  { id: 2, name: 'EFG', phone: '0987654321' },
  { id: 3, name: 'hij', phone: '5423286725' },
  { id: 4, name: 'JKL', phone: '8867896602' },
  { id: 5, name: 'def', phone: '1253546856' },
  { id: 6, name: 'EFG', phone: '3541221524' },
];
const CustomGrid = () => {
  const [searTerm, setSearchTerm] = useState('');
  const [searchInput, setSearchInput] = useState('')
  const [searchClicked, setSearchClicked] = useState(false)
  const filterData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searTerm.toLowerCase()) ||
      item.phone.includes(searTerm)
  );
  const handleSearch = () => {
    setSearchTerm(searchInput)
    setSearchClicked(true)
  }
  return (
    <div>
      <h2>Custom grid </h2>
      <input
        type="text"
        value={searchInput}
        placeholder="search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}> Search</button>
      {searchClicked && (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {filterData.length > 0 ? (
            filterData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>no result</td>
            </tr>
          )}
        </tbody>
      </table>)}
    </div>
  );
};
export default CustomGrid;
