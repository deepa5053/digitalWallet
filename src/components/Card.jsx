import React, { useContext } from 'react'
import bitcoin from '../assets/vendor-bitcoin.svg'
import chip from '../assets/chip-dark.svg'
import './Card.css'
import { CardNameContext, CardNumContext, ValidContext, VendorContext } from '../pages/AddCard'


function Card() {
const CardName = useContext(CardNameContext); 
const CardNum = useContext(CardNumContext); 
const CardValid = useContext(ValidContext); 
const Vendor = useContext(VendorContext);
  return (
      <div>
        <section className='main-card' id={Vendor}>
            <div className='images'>
                <img src={chip} alt="" />
               
            </div>
            <div>
                <p className='num'>{CardNum}</p>
            </div>
            <div className='card-details'>
                <label htmlFor="">CARDHOLDER NAME </label>
                
                <label htmlFor="">VALID THRU</label>
            </div>
            <div className='input'>
              <p>{CardName}</p>
               <p>{CardValid}</p>
            </div>

        </section>
       
    </div>
  )
}

export default Card;
