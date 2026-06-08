import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route} from "react-router"; 
import store from "./redux/store.js"; 
import Products from './Pages/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
