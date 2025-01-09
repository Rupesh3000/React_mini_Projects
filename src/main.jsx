import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GlobleState from './Projects/FoodRecipe/FoodContext/FoodContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobleState>
      <StrictMode>
        <App />
      </StrictMode>
    </GlobleState>
  </BrowserRouter>
)
