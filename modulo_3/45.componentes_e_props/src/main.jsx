import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ViaCepFunc from './desafio_da_aula_46/ViaCepFunc'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViaCepFunc cep='04430-400'/>
  </StrictMode>,
)
