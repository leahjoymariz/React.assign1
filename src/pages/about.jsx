import "./about.css";
import { useState } from 'react';

function About(){
    const [displayEmail, setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("Hello!");
        setDisplayEmail(true);
    }

    function getEmailSection(){

        if(displayEmail){
             return <h5>leahjoymariz@gmail.com</h5>
        }
        else {
            return null;
        }
       
    }

    return (
        <div className = "About">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <h1>Leah Joy Mariz Duco</h1>
            {getEmailSection()}
            <button className='btn btn-sm btn-dark' onClick={toggleEmail}>Show Email</button>
        </div>
    );
    
}

export default About;