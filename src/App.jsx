import { useState } from 'react'
import './App.css'

function App() {
  const [ideia, setIdeia] = useState('')
  const [ideias, setIdeias] = useState([])
  const [concluidas, setConcluidas] = useState([])

  function adicionarIdeia(e) {
    e.preventDefault()

    if (ideia.trim() === '') {
      return
    }

    setIdeias([...ideias, ideia])
    setIdeia('')
  }

  function concluirIdeia(index) {
    const ideiaConcluida = ideias[index]

    setConcluidas([...concluidas, ideiaConcluida])
    setIdeias(ideias.filter((_, i) => i !== index))
  }

  function removerConcluida(index) {
    setConcluidas(concluidas.filter((_, i) => i !== index))
  }

  return (
    <div className="app">
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          placeholder="Digite uma ideia"
          value={ideia}
          onChange={(e) => setIdeia(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <div className="painel">
        <section>
          <h2>Ideias</h2>

          <ul>
            {ideias.map((item, index) => (
              <li key={index}>
                <span>{item}</span>

                <button onClick={() => concluirIdeia(index)}>
                  Concluir
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Concluídas</h2>

          <ul>
            {concluidas.map((item, index) => (
              <li key={index}>
                <span>{item}</span>

                <button onClick={() => removerConcluida(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App