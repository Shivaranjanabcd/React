import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import React from 'react'
import { Test } from './Test'

export const QueryApp=()=>{
    const queryclient=new QueryClient()

    return(
        <QueryClientProvider client={queryclient}>
            <Test />
        </QueryClientProvider>
    )
}

