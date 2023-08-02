import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./componenets/NavBar/NavBar";
import ItemsList from "./componenets/ItemsList/ItemsList";
import ItemDetails from "./componenets/ItemDetails/ItemDetails";

import "./App.css";

const API_URL = "http://localhost:4444";

function App() {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}/items`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setItemsData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // console.log(itemsData)
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemsList
                itemsData={itemsData}
                loading={loading}
                error={error}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <ItemDetails
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
