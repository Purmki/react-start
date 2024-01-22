

import ProductCard from '../components/productCard';
import { useState,useEffect } from'react';


function Product() {
    const [products, setProducts] = useState([{
        productName: "computer",
        price: 100000,
        image: ""
    },{
        productName: "laptop",
        price: 200000,
        image: ""
    },{
        productName: "mouse",
        price: 300000,
        image: ""
    }])
    const changeHandler = (e) => {
        products[e.target.name]=e.target.value;
    }
    const submitHandler = (e) => {
        e.preventDefault();
      setProducts([...products, products])
    }

    const fetchProduct=() =>{
        fetch("https://fakestoreapi.com/products")
       .then(response => response.json())
       .then(data => {
           console.log(data);
           setProducts(data);
       })
       .catch(err=>{
           console.log(err);
       })
   }
    useEffect(()=>{
        fetchProduct();
            },[])
return(
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name='productName' onChange={changeHandler}/>
            <input type="text" name='price' onChange={changeHandler}/>
            <input type="text" name='image' onChange={changeHandler}/>
            <button type='submit'> add product </button>
            
        </form>
        {products.map((product, index) => {
            return(
                <ProductCard product={product} key={index}/>
            )
        })} 
    </div>
)


       

}
export default Product;