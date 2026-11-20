import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import queryClient from './queries/querieClient.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>  {/*//central connection between your React application and the React Query cache and Any component inside the provider can use React Query hooks such as useQuery and useMutation */}
      <App />
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
