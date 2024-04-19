import React from 'react';
import './ActiveCard.css';
import chip from '../assets/chip-dark.svg'


function ActiveCard({cardNumber, cardHolderName, Date, vendor, vendorIcon, onClick}) {
  return (
    <main className={`'main-card' ${vendor}`} onClick={onClick}>
    <header className='header'>
    <img src={chip} alt="" />
      <div className={`header__vendor_icon ${vendor}`} src={vendorIcon}/>
    </header>
    <h2 className='num'>{cardNumber}</h2>
    
      <div className='card-details'>
        <p>cardholder name</p>
        <p>{cardHolderName}</p>
      </div>
      <div  className='input'>
        <p>valid thru</p>
        <p>{Date}</p>
      </div>
  
  </main>
  )
}

export default ActiveCard