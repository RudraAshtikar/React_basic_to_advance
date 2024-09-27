import Chai from "./Chai";

function App() {
  return (
    //React.fragment <></>
    <>
      <Chai />
      <h1>Created with react || Rudra Ashtikar</h1>
      <p>
        To create a react app using react run "npx create-react-app appname"
        Creating react app like this is very time consuming and using a
        packaging software is recommended.
      </p>
      <ul>
        <li>Best practices for writing code in react</li>
        <li>
          Always use Capital letters to write the folder name and the function
          name so when importing and returning does not give an error
        </li>
        <li>
          While exporting html elements alwasy use React.fragment(<></>)
          <ul>
            <li>
              <b>Because react only allows one component to export </b>
            </li>
          </ul>
          <ul>
            <li>and secondly as it keeps the code consistent </li>
          </ul>
        </li>
        <li>
          Keep the file expensions as .jsx because some libraries force us to
          use that
        </li>
      </ul>
    </>
    // npx is node package executor
    // create-react-app is a utility
  );
}

export default App;
