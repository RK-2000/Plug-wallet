import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Fragment } from "react";
import Account from "./Components/Account";
import Main from "./Components/Main";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
