import ItemCard from "../ItemCard/ItemCard"

export default function ItemsList({itemsData}){
  return (
    <div>
      <h1> Menu</h1>
      {itemsData.map((item) => 
        <ItemCard item={item} />
      )}
    </div>
  )
}