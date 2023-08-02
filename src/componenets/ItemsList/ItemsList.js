import ItemCard from "../ItemCard/ItemCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import "./ItemsList.css";

export default function ItemsList({ itemsData, loading, error }) {
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return (
        <div>
          <h1> Our Menu</h1>
          <div className="Items-list">
            {itemsData.map((item) => (
              <ItemCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      );
    }
  };

  return <div className="main">{renderContent()}</div>;
}
