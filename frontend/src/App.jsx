import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateBooks from "./components/CreateBooks";
import DeleteBooks from "./components/DeleteBooks";
import EditBooks from "./components/EditBooks";
import Home from "./components/Home";
import ShowBook from "./components/ShowBook";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/create" element={<CreateBooks />}></Route>
        <Route path="/books/details/:id" element={<ShowBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBooks />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
      </Routes>
    </>
  );
}

export default App;
