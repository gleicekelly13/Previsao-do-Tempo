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
        <div className='min-h-screen flex flex-col items-center justify-center gap-7'>
          <h1 className='text-3xl font-semibold text-slate-800'>Previsão do Tempo</h1>
    
          <main className='flex flex-col gap-6 items-start'>
            <label className='flex gap-2 items-center font-medium'>Cidade:
              <input
                className='p-2 border-2 rounded-lg border-slate-200 outline-none'
                type="text"
                value={cidade}  /* O valor que o input mostra deve vir do estado (cidade) */
                onChange={(e) => setCidade(e.target.value)} /* Toda vez que o usuário digita algo, a função é chamada e atualiza cidade com o novo valor */
                placeholder='Digite o nome da cidade'
              />
            </label>
    
            <button
              onClick={buscarClima}
              className='bg-slate-400 text-slate-950 p-2 rounded-md hover:bg-slate-500 transition hover:font-medium'
            >
              Pesquisar
            </button>
    
            {clima && (
              <div className='mt-6 bg-sky-400 shadow-lg rounded-2xl p-6 w-80 text-center leading-10'>
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