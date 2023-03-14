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
            <h5>{props.data.title}</h5>
            <img src={"/images/" + props.data.image} alt=""/>

            <div className= "prices">
                <label>Price {props.data.price.toFixed(2)}</label>
                <label>Total {getTotal()}</label>
            </div>

            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button type="button" className="btn btn-primary">Add</button>
        </div>
    );
}

export default Product;