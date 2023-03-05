import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from './hotels/components/Container'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
