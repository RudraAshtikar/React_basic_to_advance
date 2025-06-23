import { Children, useState } from "react";

function App() {
  return (
    <>
      <div>
        <h1>Custom App | Rudra </h1>
      </div>
    </>
  );
}

// This is how to create Custom react with our own set of rules:

// const ReactElemet = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Google{" "}
  </a>
);

export default App;
