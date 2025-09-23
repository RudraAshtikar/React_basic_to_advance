import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./LAYOUT.JSX";
import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github, { githubInfoLoader } from "./Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/:userid" element={<User />} />
      <Route
        loader={githubInfoLoader} // if u want you can write the whole API call here only, callbacks are allowed here
        path="Github"
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
