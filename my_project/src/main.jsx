import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import Store from './components/Redux/app/store.js'
import Protected_App from './components/Protected_Router/App/Protected_App.jsx'
import API_App from './components/APICall/API_App.jsx'
import { Test } from './components/React_Query/Test.jsx'
import { QueryApp } from './components/React_Query/QueryApp.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={Store}> {/*/ instead of <StrictMode>*/}
    <BrowserRouter>
      {/* <App /> */}
      <Protected_App />
      <API_App />
      
      <QueryApp />
    </BrowserRouter>
  </Provider>
)
