import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    let [quantity, setQuantity] = useState(1);
    
    function decrease(){
        if (quantity===1) return;
        let val = quantity - 1;
        setQuantity(val);
    }

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
    }

    return(
        <div className="qt-picker">
            <button  disabled={quantity === 1 }onCLick={decrease}> 
            {" "}
            -{" "} 
            </button>
            <label> {quantity} </label>
            <button onCLick={increase}> + </button>
        </div>
       
    );
}

export default QuantityPicker;