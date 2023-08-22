import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './Router/mainRouter'
import {QueryClient, QueryClientProvider } from "@tanstack/react-query"

const client = new QueryClient()

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
      <RouterProvider router={mainRouter}/>
      </QueryClientProvider>
     
    </div>
  )
}

export default App
