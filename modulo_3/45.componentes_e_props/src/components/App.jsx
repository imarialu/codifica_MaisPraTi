function Button(props){
  return <button onClick={props.onClick}>Clique aqui!</button>
}

function App() {

  const handleClick = () => {
    aler("Botão clicado!")
  }

  return (
    <>
      <Button onClick={handleClick}/>
    </>
  )
}

export default App
