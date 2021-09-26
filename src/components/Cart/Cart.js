import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faSackDoller,faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const newCart = props.cart;


    const total = newCart.reduce((previus, current) => previus+current.sallary,0);

    let developerInfo = [];

    for (const developer of newCart) {

        if(developerInfo){
            developerInfo.push(developer.name);
        }
    }
    
    

    return (
        <div>
            <div className ='developer' style = {{height:'200px'}}>
              <h4><span className='icon-color'><FontAwesomeIcon icon={faUserPlus} /></span> Total  Selected : <span style = {{color : 'rgb(1, 19, 19)'}}>{props.cart.length}</span> </h4>
              <h5 ><span className ='icon-color'><FontAwesomeIcon icon={faDollarSign} /></span> Total Cost : ${total}</h5>
              
            </div>
            <div className = 'cart-container developer' style ={{alignItems:'center'}}>
                <h6>Name : {developerInfo}</h6>
                <img src={developerInfo} alt="" />
            </div>
        </div>
    );
};

export default Cart;