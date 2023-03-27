import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useEffect, useState} from "react";



function Product(props) {

    const [quantity,setQuantity] = useState(1);

    useEffect(function () {
        console.log("hey I'm a product");
    
    },[]);


    function onQuantityChange(qty){
        console.log("new value: " + qty);
        setQuantity(qty);


    }

    function getTotal(){
        let total = props.data.price + quantity;
        return total.toFixed(2);
}

    return (
        <div className="product">
            
            <img src={"/images/" + props.data.image} alt=""/>

            <h5>{props.data.title}</h5>

            <div className= "prices">
                <label>Total ${getTotal()}</label>
                <label>Price ${props.data.price.toFixed(2)}</label>  
            </div>

        <div className="controls">
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button type="button" className="btn btn-sm btn-info">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </button>
            </div>
        </div>
    );
}

export default Product;