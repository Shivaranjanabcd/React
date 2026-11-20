import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Customers from './components/Customers'
import Customer_filter from './components/Customer_filter'
import AddCustomer from './components/AddCustomer'
import CustomerManagement from './components/CustomerManagement'
import CustomerPolicies from './components/CustomerPolicies'
import UpdateCustomer from './components/UpdateCustomer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1>React Query Training</h1>
      <Customers />
      <Customer_filter />
      <AddCustomer />
      <CustomerManagement />
      <CustomerPolicies customerId="6639629c-6ca3-4c92-915d-e8b6fc4be90c" />
      <UpdateCustomer />
    </div>
    
  )
}

export default App;
