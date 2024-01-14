

function productCard(props){

    return (
        
          
           
            <div>
              <h1>{props.product.productName}</h1>
              <p>Price: {props.product.price}</p>
            </div>
    
      
      );
}

export default productCard