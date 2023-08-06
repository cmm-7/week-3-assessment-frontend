import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

import "./ItemDetails.css";

const API_URL = "http://localhost:8888";

export default function ItemDetails({ loading, setLoading, error, setError }) {
  const { id } = useParams();
  const [itemData, setItemData] = useState([]);
  console.log(id);
  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await fetch(`${API_URL}/items/${id}`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setItemData(data);
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
    fetchItem();
  }, []);

  const { name, price, image, toppings, shortDescription, longDescription } =
    itemData;
  let toppingsEmpty = false;
  console.log(itemData[0]);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return (
        <div className="Details">
          <ul>
            <li>
              <h1>{name}</h1>
            </li>
            <li id="short-description">{shortDescription}</li>
            <li>
              <img className="Item__img" src={image} alt={`${name}`} />
            </li>
            <li id="long-description">{longDescription}</li>
            <li>
              Price:{" "}
              {`$${Number(price)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div key={id} className="Item-Details">
      {renderContent()}
    </div>
  );
}
