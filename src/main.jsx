import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Projects/ShoppingCart/Store/storeIn.js'
// import GlobleState from './Projects/FoodRecipe/FoodContext/FoodContext.jsx'


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
)
