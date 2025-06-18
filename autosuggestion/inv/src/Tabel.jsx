import React from 'react'

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const Table = ()=>{
  return (
    <div>
      <h1>Table</h1>
      {PRODUCTS.map((i)=>(
        <div>
          <Table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Price</th>
                <th>Name</th>
              </tr>
              </thead>
          <tr>
            <td>{i.category}</td>
          </tr>
          <tr>
            <td>{i.price}</td>
          </tr>
          <tr>
            <td>{i.name}</td>
          </tr>
          </Table>
        </div>
      ))}
      </div>
  )
}
export default Table
