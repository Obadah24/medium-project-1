import React from 'react'
import NavBar from '../components/NavBar'
import HeroReservation from '../components/HeroReservation'
import BookingPage from '../components/BookingPage'
import Alert from '../Alert'
import {AlertProvider} from '../components/ContextApi'
import Footer from '../components/Footer'
export default function Reservations() {
  return (
    <>
    <AlertProvider>
    <NavBar />
    <HeroReservation />
    <BookingPage />
    <Footer />
    <Alert />
    </AlertProvider>
    </>
  )
}
