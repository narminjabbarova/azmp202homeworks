import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientFooter from './Footer'
import ClientHeader from './clientHeader'
import Hero from './Hero'

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Hero/>
      <ClientFooter />
      <Outlet />
    </>
  )
}

export default ClientLayout