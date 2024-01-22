

function ProductCard(props){
    return(
        <div>
            <h1>{props.product.productName}</h1>
            <h2>{props.product.price}</h2>
            <h2>{props.product.description}</h2>
            <img src={props.product.image} />
            
        </div>
    )
} 
export default ProductCard;