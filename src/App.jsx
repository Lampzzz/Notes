import { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note 1",
      body: "This is the content of Note 1. It can contain any information you want.",
      datetime: "2024-01-18T10:30:00Z",
    },
    {
      id: 2,
      title: "Note 2",
      body: "Here goes the content of Note 2. Feel free to customize it as needed.",
      datetime: "2024-01-18T14:45:00Z",
    },
    {
      id: 3,
      title: "Another Note",
      body: "This is another example note with its own title, body, and datetime.",
      datetime: "2024-01-18T18:20:00Z",
    },
    {
      id: 4,
      title: "Another Note",
      body: "This is another example note with its own title, body, and datetime.",
      datetime: "2024-01-18T18:20:00Z",
    },
  ]);

  return (
    <>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home notes={notes} />} />
      </Routes>
    </>
  );
};

export default App;
