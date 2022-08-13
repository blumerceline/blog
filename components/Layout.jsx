import React, { Children } from 'react'
import {Header} from './';

import dynamic from 'next/dynamic'
import styled from "styled-components";

const BgImage = dynamic(() => import ("../components/BGImage"),{
  ssr: false,
});

const Wrapper = styled.div`
z-index:1;
width:100%;
height:100%;
position:fixed;
justify-content:center;
align-items:center;`;


export const Layout = ({children}) => {
  return (
    <>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        
        <BgImage styled="z-index: -1" />
    </>
  )
}

export default Layout
