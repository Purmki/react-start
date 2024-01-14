import { useState } from "react";
import ProductCard from "../components/productCard";
function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Shoes",
      price: 100,
    },
    { id: 2, productName: "Pants", price: 200 },
    { id: 3, productName: "Shirt", price: 300 },
    { id: 4, productName: "T-shirt", price: 400 },
  ]);
  {
    return (
   products.map((product, index) => {
    return <ProductCard product={product} key={`pr_${index}`}/>
  })
    )
}

}
export default Products;