import { useState } from 'react';

const content = [
  {
    label: "Por que utilizar o React",
    items: [
      "React é extremamente popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ]
  },

  {
    label: "Principais Recursos",
    items: [
      "Componentes, JSX e Props",
      "Estado",
      "Hooks (ex: useEffect())",
      "Renderização dinâmica"
    ]
  },

  {
    label: "Recursos Relacionados",
    items: [
      "Página oficial (react.dev)",
      "Next.js (Framework Fullstack)",
      "React Native (construa aplicativos móveis nativos com React)"
    ]
  }
]

function App() {

  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>ReactJS</h1>
          <p>Estou estudando React</p>
        </header>

        <div>
          <menu>
            {content.map((tab, index) => (
              <button key={tab.label} onClick={() => atualizaIndexAbaAtiva(index)}>{tab.label}</button>
            ))}
          </menu>
          <div>
            <ul>
              {content[indexAbaAtiva].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
