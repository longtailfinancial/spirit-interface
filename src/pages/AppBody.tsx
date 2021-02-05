import React from 'react'
import styled from 'styled-components/macro'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const BodyWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;


  //glassmorphism UI
  background: rgba( 255, 255, 255, 0.50 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0.0px );
  -webkit-backdrop-filter: blur( 0.0px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  
  //background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      {children}
    </BodyWrapper>
}
