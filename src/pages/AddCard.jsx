import React, { createContext, useState } from 'react'
import './AddCard.css'
import Card from '../components/Card';
import CardForm from '../components/CardForm';

const CardNameContext = createContext(undefined);
const ChangeCardName = createContext(undefined);
const CardNumContext = createContext(undefined);
const ChangeCardNum = createContext(undefined);
const ValidContext = createContext(undefined);
const ChangeValid = createContext(undefined);
const VendorContext = createContext(undefined);
const ChangeVendorContext = createContext(undefined);


function AddCard() {
  const [CardName, setCardName]= useState("FIRATNAME LASTNAME");
  const [CardNum, setCardNum] = useState("XXXX XXXX XXXX XXXX");
  const [Valid, setValid] = useState ("MM-YY");
  const [selectedVendor, setSelectedVendor] = useState('a');

  return (
      <div>
        <CardNameContext.Provider value={CardName}>
        <ChangeCardName.Provider value={setCardName}>
        <CardNumContext.Provider value={CardNum}>
        <ChangeCardNum.Provider value={setCardNum}>
        <ValidContext.Provider value={Valid}>
        <ChangeValid.Provider value={setValid}>
        <VendorContext.Provider value={selectedVendor}>
        <ChangeVendorContext.Provider value={setSelectedVendor}>
        <Card/>
       <CardForm/>
       </ChangeVendorContext.Provider>
       </VendorContext.Provider>
       </ChangeValid.Provider>
       </ValidContext.Provider>
       </ChangeCardNum.Provider>
       </CardNumContext.Provider>
        </ChangeCardName.Provider>
        </CardNameContext.Provider>
         
    </div>
  )
}

export {ChangeCardName,CardNameContext, CardNumContext, ChangeCardNum, ValidContext, ChangeValid, VendorContext, ChangeVendorContext};
export default AddCard;

