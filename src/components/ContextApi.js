import React, { useContext, createContext, useState } from 'react'

const UserContext = createContext(undefined)

const SpecialsContext = createContext(undefined)

const AlertContext = createContext(undefined);

const OptionContext = createContext(undefined);

const CustomerContext = createContext(undefined)

export const UserProvider = ({children}) => {
  const data = {
    calltoaction: {
    Name:'Little Lemon',
    Subtitle:'Dubai',
    Description:'Lemon little is the restaurant has delicious classic and modern meals additionally creating a table booking form for the Little Lemon website.',
    Reserve:'Reserve a Table',
    },
    Dubai: {
    Name:'Little Lemon',
    Subtitle:'Dubai',
    Description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat duis enim velit mollit. ',
    },
  }
  return (
    <UserContext.Provider value={{data}}>
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => useContext(UserContext)

export const SpecialsProvider = ({children}) => {
  const  specials= [
    {
    getImageSrc: () => require("../img/Greel salad.png"),
    Name:'Greek salad',
    Price:'$12.99',
    Description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    Button:'Order a delivery',
  },
    {
    getImageSrc: () => require("../img/Lemon Dessert.png"),
    Name:'Lemon Dessert',
    Price:'$ 5.99',
    Description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil with salt and olive oil.',
    Button:'Order a delivery',
    },
    {
    getImageSrc: () => require("../img/Crispy Chicken.png"),
    Name:'Crispy Chicken',
    Price:'$ 5.00',
    Description:'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined as authentic as can be imagined .',
    Button:'Order a delivery',
    },
  ]
  return (
    <SpecialsContext.Provider value={specials}>
      {children}
    </SpecialsContext.Provider>
  )
}
export const useSpecials = () => useContext(SpecialsContext)


export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
export const useAlertContext = () => useContext(AlertContext);

export const OptionProvider = ({children}) => {
  const initialState = {op1:'2:00 pm',op2:'3:00 pm',op3:'4:00 pm'}
  const [state, updateTimes] = React.useReducer(availableTimes, initialState)
  const ops = {
    calltoaction: {
    state,
    updateTimes
    },
    calltooption: {
    occasion1:'Birthday',
    occasion2:'Engagement',
    occasion3:'Anniversary',
    },
  }
  return (
    <OptionContext.Provider value={{ops}}>
      {children}
    </OptionContext.Provider>
  )
}

export const useOptionContext = () => useContext(OptionContext)

const availableTimes = (state, action) => {
  const d = new Date();
  let day = d.getDate()
  let year = d.getFullYear()
  let month = d.getMonth()
  if(action.date === `${year}-0${month + 1}-0${day}`) return {op1:'2:00 pm',op2:'3:00 pm',op3:'4:00 pm'}
  if(action.date === `${year}-0${month + 1}-0${day + 1}`) return {op1:'5:00 pm',op2:'6:00 pm',op3:'7:00 pm'}
  if(action.date === `${year}-0${month + 1}-0${day + 2}`) return {op1:'12:00 pm',op2:'11:00 pm',op3:'10:00 pm'}
  return state
}

export const CustomerProvider = ({children}) => {
  const d = new Date();
  let day = d.getDate()
  let year = d.getFullYear()
  let month = d.getMonth()
  const  customer = [
    {
      getImageSrc: () => require("../img/Customer1.png"),
      Name:'Obadah-101',
      Date:`${year}-0${month + 1}-${day}`,
      Description:'It low-calorie and nutrient-dense, it is a special and delicious dish.',
    },
    {
      getImageSrc: () => require("../img/Customer2 .png"),
      Name:'Abd-102',
      Date:`${year}-0${month + 1}-${day}`,
      Description:'It look pretty and meld well with lemon is pretty and delicious.',
    },
    {
      getImageSrc: () => require("../img/Customer3.png"),
      Name:'Mohammed-103',
      Date:`${year}-0${month + 1}-${day}`,
      Description:'It topped with chili lime paprika to give it a spicy taste it is my favourite meal.',
    },
    {
      getImageSrc: () => require("../img/Customer4.png"),
      Name:'Omar-104',
      Date:`${year}-0${month + 1}-${day}`,
      Description:'In general,the restaurant offers different and new meals, but there are some that are not bad.',
    },
  ]
  return (
    <CustomerContext.Provider value={customer}>
      {children}
    </CustomerContext.Provider>
  )
}
export const useCUstomer = () => useContext(CustomerContext)