// function ListGroup() {
//   return (
//     // use a fragment to wrap all the children
//     <>
//         <h1>List Group</h1>
//         <ul className="list-group">
//           <li className="list-group-item">An item</li>
//           <li className="list-group-item">A second item</li>
//           <li className="list-group-item">A third item</li>
//           <li className="list-group-item">A fourth item</li>
//           <li className="list-group-item">And a fifth one</li>
//         </ul>
//     </>
//   );
// }
import { useState } from "react";

// Render a list of items dynamically
function ListGroup() {
  let cities = ["Gaza", "Jerusalem", "Ramallah", "Nablus", "Deir Al Balah"];
  //   cities = []; // cities.length === 0

  //   Hook, is a function that allows us to tap into built-in features in React,
  //   the following hook called a Stathook, we use it when components can have data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Use a fragment to wrap all the children
    <>
      <h1>List Group</h1>

      {/* Conditional Rendering */}
      {cities.length === 0 ? <p>No items found</p> : null}
      {/* More concise way to implement the Conditional Rendering */}
      {cities.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {/* When using map method we should give each item a unique key*/}
        {cities.map((city, index) => (
          <li
            // Render active class dynamically , Conditional Rendering
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            // Event Handler
            // onClick={() => console.log(city)}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
