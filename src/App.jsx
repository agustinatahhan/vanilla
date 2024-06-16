import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Nav from './Components/Nav/Nav';
import Home from "./Views/Home/Home";
import Nav from "./Components/Nav/Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
