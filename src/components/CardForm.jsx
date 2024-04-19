import React, { useContext } from 'react'
import './CardForm.css'
//import {CardNameContext} from '../pages/AddCard'
import { ChangeCardName, ChangeValid } from '../pages/AddCard';
import { ChangeCardNum, ChangeVendorContext, VendorContext } from '../pages/AddCard';
import { useState } from 'react';
import { addCard } from '../actions';
import { useNavigate } from 'react-router-dom';
import reducer from '../reducer/reducer';
import { useDispatch } from 'react-redux';
import { CardNameContext } from '../pages/AddCard';

function CardForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('inside addmycard')
      dispatch(reducer({ cardNumber, cardHolderName, expirationDate, ccv, vendor }));
      navigate('/')
      
  };
//const CardName = useContext(CardNameContext);
const setName = useContext(ChangeCardName);  
const setNum = useContext(ChangeCardNum);
const setValid = useContext(ChangeValid);
const setVendor = useContext(ChangeVendorContext);
const CardName = useContext(CardNameContext); 

const Addmycard=() => {
  console.log('inside addmycard')
//console.log({CardName});
}


    return (
    <main >
        <div className="card-form" onSubmit={handleSubmit} >
        
          <label htmlFor=""><b>CARD NUMBER</b></label>
          <input type="text" name="" id="" onKeyUp={(event)=> {setNum(event.target.value);
          }}
          />
          <label htmlFor=""><b>CARDHOLDER NAME</b></label>
          <input placeholder="FIRSTNAME LASTNAME" type='text' onKeyUp={(event)=> {setName(event.target.value);
          }}
          />
       
          
          <label htmlFor=""><b>VALID THRU</b></label>
          <input type="text" name="" id="" onKeyUp={(event)=> {setValid(event.target.value);
          }}
          />
          <label htmlFor=""><b>CVV</b></label>
          <input type="text" name="" id="" />
         
          
            <label htmlFor=""><b>VENDOR</b></label>
          <select name="vendors" id="" onChange= {(event)=> {setVendor(event.target.value);}}>
            <option value="a" className='bit'>BITCOIN INC</option>
            <option value="b" className='ninja'>NINJA BANK</option>
            <option value="c" className='block'>BLOCK CAHIN INC</option>
            <option value="d" className='evil'>EVIL CORP</option>
          </select>
          
        </div>
          <button className='card-btn' onClick={Addmycard}>ADD CARD</button>

          
    </main>
    )
  }

 
  export default CardForm;

