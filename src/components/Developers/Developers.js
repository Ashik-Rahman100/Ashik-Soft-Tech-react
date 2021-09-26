import React, { useState,useEffect } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css'

const Developers = () => {
    const [developers,setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./Fakedata.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    }, []);

    const handleDevBtn = (newDeveloper) =>{
        const newDevArray = [...cart, newDeveloper];
        setCart(newDevArray);
    }   

    return (
        <div className = 'developers-container'>
            {/* developer component */}
            <div className='developer-container'>

              <div className = 'dev-container'>
                   {
                     developers.map(developer => <Developer developers ={developer} 
                    handleDevBtn ={handleDevBtn}
                    key = {developer._id}
                    ></Developer>)
                   }
              </div>
            </div>

            {/* cart component */}
            <div  className = 'cart-container' style ={{height: '270px',marginTop: '30px'}}>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Developers;