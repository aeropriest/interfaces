import React from 'react';
import { createRoot } from 'react-dom/client';

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    // Update the products array accordingly ...
  };

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */}
    </ul>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>);

setTimeout(() => {
  let plusButton = document.querySelector("ul > li > button");
  if(plusButton) {
    plusButton.click();
  }
  setTimeout(() => {
    console.log(document.getElementById('root').outerHTML);
  });
});