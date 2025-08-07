import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LifeCycleFunctionalComponent from './components/LifeCycleFunctionalComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LifeCycleFunctionalComponent />
  </StrictMode>,
)
