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

// render a list of items dynamically
function ListGroup() {
  let cities = ["Gaza", "Jerusalem", "Ramallah", "Nablus", "Deir Al Balah"];
  //   cities = []; // cities.length === 0
  return (
    // use a fragment to wrap all the children
    <>
      <h1>List Group</h1>
      {/* Conditional Rendering */}
      {cities.length === 0 ? <p>No items found</p> : null}
      {/* More concise way to implement the Conditional Rendering */}
      {cities.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* when using map method we should give each item a unique key*/}
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
