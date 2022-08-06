import React, { Children } from 'react'
import {Header} from './';

export const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout
