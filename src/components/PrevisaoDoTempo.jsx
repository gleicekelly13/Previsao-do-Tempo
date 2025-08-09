import { useState } from 'react'
import axios from 'axios';

function PrevisaoDoTempo () {
    const [cidade, setCidade] = useState('');
    const [clima, setClima] = useState(null);
      
    const buscarClima = async () => {
        if (cidade.trim() === '') {
          alert('Digite uma cidade!')
          return
        }
    
        try {
          const resposta =await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              q: cidade,
              appid: import.meta.env.VITE_API_KEY,
              units: 'metric',
              lang: 'pt-br'
            }
        })
    
          setClima(resposta.data)
        } catch (erro) {
          alert('Cidade não encontrada!')
          console.error(erro);
        }
    
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
    
            {clima && (
              <div>
                <h2>{clima.name}</h2>
                <p>{clima.weather[0].description}</p>
                <p>Temperatura: {clima.main.temp}°C</p>
                <p>Umidade: {clima.main.humidity}%</p>
              </div>
            )}
          </main>
        </div>
    )
}
    
export default PrevisaoDoTempo;