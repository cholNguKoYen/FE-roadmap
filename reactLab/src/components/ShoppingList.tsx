const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Banana", isFruit: true, id: 2 },
  { title: "Carrot", isFruit: false, id: 3 },
  { title: "Apple", isFruit: true, id: 4 },
];

export default function ShoppingList() {
  const listItems = products.map((products) => (
    <li
      key={products.id}
      style={{ color: products.isFruit ? "magenta" : "darkgreen" }}
    >
      products.title
    </li>
  ));
  return <ul>{listItems}</ul>;
}
