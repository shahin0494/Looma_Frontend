import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextShare from './Context-APi/ContextShare.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextShare>
        <GoogleOAuthProvider clientId="1048306193446-t7fe9oeslncbk07kl7mo59ta4cis32d1.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ContextShare>
    </BrowserRouter>
  </StrictMode>,
)
