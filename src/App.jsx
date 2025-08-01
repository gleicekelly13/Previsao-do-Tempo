import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cidade, setCidade] = useState('');
  
  const buscarClima = () => {
    alert(`Buscar o clima da cidade: ${cidade}`) /* A mensagem mostra o valor atual digitado no input */
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>

      <main className='conteúdo-principal'>
        <label>Cidade:
          <input
            type="text"
            value={cidade}  /* O valor que o input mostra deve vir do estado (cidade) */
            onChange={(e) => setCidade(e.target.value)} /* Toda vez que o usuário digita algo, a função é chamada e atualiza cidade com o novo valor */
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
