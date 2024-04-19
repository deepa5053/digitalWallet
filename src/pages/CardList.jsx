
import CardForm from "../components/CardForm";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState } from 'react'
import ActiveCard from "../components/ActiveCard";



function CardList() {
  const [activeCard, setActiveCard] = useState({});

  const makeCardActive = (card) => {
    setActiveCard(card);
  }

  const card =[] 
  //useSelector(state => state.AddNewCard); 
  

  const navigate = useNavigate();
  const goToAddCard = () => {
    navigate("/addcard");
  }

  
  
  

    return (
  
        <div>
          
          <section className='Provider'>
      <h1 className='Title'> E-wallet</h1>
      <p className='Info'>active card</p>
      {activeCard && <ActiveCard {...activeCard} />}
      <section className='Card_stack'>
        {card.map((card, index) => {
          return (
            <Card
              key={index}
              cardNumber={card.cardNumber}
              cardHolderName={card.cardHolderName}
              expirationDate={card.Date}
              ccv={card.ccv}
              vendor={card.vendor}
              onClick={() => makeCardActive(card)}
            />
          )
        })}
      </section>
      <button className='Button' onClick={goToAddCard}>Add a new card</button>
    </section>



          
          
      </div>
       
   
      
    
      
    )
  }

  
  
  export default (CardList);
  