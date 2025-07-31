import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const buscarClima = () => {
    alert("Você clicou no botão 'Pesquisar'")
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>

      <main className='conteúdo-principal'>
        <label>Cidade:
          <input
            type="text"
            placeholder='Digite o nome da cidade'
          />
        </label>

        <button
          onClick={buscarClima}
        >
          Pesquisar
        </button>
      </main>
    </div>
  )
}

export default App
