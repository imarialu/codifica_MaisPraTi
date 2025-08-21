import './styles/base.css';
import './styles/utilities.css';
import './styles/components.css';

import { Button } from './components/Button/Button';

import { Card } from './components/Card/Card';

import CardStyled from './components/Card/CardStyled';

function App() {
  return (
    <main className='containernpm r'>
      <Card title="Aula de Estilização">
        <p>Estilos provenientes de arquivos globais!</p>
        <Button>nem amo</Button>
      </Card>

      <CardStyled/>
    </main>
  )
}

export default App
