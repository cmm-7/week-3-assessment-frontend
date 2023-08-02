import ItemCard from "../ItemCard/ItemCard";

import "./ItemsList.css";

export default function ItemsList({ itemsData }) {
  return (
    <div className="main">
      <h1> Our Menu</h1>
      <div className="Items-list">
        {itemsData.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
