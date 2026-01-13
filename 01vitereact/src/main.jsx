import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom react App| chai</h1>
    </div>
  );
}
// The HTML syntax we pass is parsed and made into a tree like structure

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_/blank",
//   },
//   children: "click me to visit google",
// };

// this is not the syntax that react excepts, we were able to render this in our custom react because we made a custom render method ourselves but here the render is react based and it doesnot expects a object

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// This is acceptable for react

const reactElement = React.createElement(
  "a", //type
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherElement
);
createRoot(document.getElementById("root")).render(<App />);
