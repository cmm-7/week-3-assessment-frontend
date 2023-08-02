import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./componenets/NavBar/NavBar";
import ItemsList from "./componenets/ItemsList/ItemsList";

import "./App.css";

const API_URL = "http://localhost:4444";

function App() {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(`${API_URL}/items`)
        .then((res) => res.json())
        .then(({ data }) => {
          setItemsData(data);
        });
    }
    fetchData();
  }, []);

  // console.log(itemsData)
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsList itemsData={itemsData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
