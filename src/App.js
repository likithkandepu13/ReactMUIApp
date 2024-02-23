// import logo from './logo.svg';
// import './App.css';


import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2 align="center">React Material UI Demo</h2>

      <Router>
        <NavBar/>
      </Router>

      {/* /<Demo1/> */}
    </div>
  );
}

export default App;