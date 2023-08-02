export default function ItemCard({item}){
  console.log(`<ItemCard/> : ${item.name}`)
  return(
    <div key={item.id}>
      {item.name}
    </div>
  )
}