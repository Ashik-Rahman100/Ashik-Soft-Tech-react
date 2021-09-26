import React from 'react';
import './Developer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Developer = (props) => {
    
    const {name,age,category,picture,sallary, email} = props.developers;

    return (
        <div >
            <div className = 'developer'>
                <img src={picture} alt=""  />
                <h4>{name}</h4>
                <p>Age : {age}</p>
                <h6>Profession : {category}</h6>
                <p>E-mail: {email}</p>
                <p><small>Sallary $: {sallary}</small></p>
                <button onClick = {() => props.handleDevBtn(props.developers) } className = 'cart-btn'><FontAwesomeIcon icon={faUserPlus} /> Select Developer</button>
            </div>
            
        </div>
    );
};

export default Developer;