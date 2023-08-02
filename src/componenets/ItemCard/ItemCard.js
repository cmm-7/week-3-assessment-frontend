import "./ItemCard.css";

export default function ItemCard({ item }) {
  const { name, price, image, toppings, shortDescription } = item;
  let toppingsEmpty = false;

  if (toppings.length === 0) {
    toppingsEmpty = true;
  }

  return (
    <div className="ItemCard">
      <ul>
        <li>
          <h1>{name}</h1>
        </li>
        <li id="short-description">{shortDescription}</li>
        <li>
          <img className="ItemCard__img" src={image} alt={`${name}`} />
        </li>
        <li>
          Price:{" "}
          {`$${Number(price)
            .toFixed(2)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </li>
        {!toppingsEmpty && <li>Toppings: {toppings.join(", ")}</li>}
      </ul>
    </div>
  );
}
