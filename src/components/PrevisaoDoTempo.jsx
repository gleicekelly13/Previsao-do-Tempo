import { useState } from 'react';
import axios from 'axios';
import { Thermometer, Droplet } from 'lucide-react';


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
              lang: 'pt_br'
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
    
            {clima && (() => {
              let bgColor = "bg-slate-200";
              const condicao = clima.weather[0].main;

              if (condicao === "Clear") {
                bgColor = "bg-blue-400";
              } else if (condicao === "Clouds") {
                bgColor = "bg-gray-400";
              } else if (condicao === "Rain") {
                bgColor = "bg-blue-700";
              } else if (condicao === "Snow") {
                bgColor = "bg-sky-200";
              } else if (condicao === "Thunderstorm") {
                bgColor = "bg-purple-600";
              } else if (condicao === "Drizzle") {
                bgColor = "bg-cyan-500";
              }

              return (
              <div className={`mt-6 ${bgColor} shadow-lg rounded-2xl p-6 w-80 text-center leading-10`}>
                <h2 className='text-2xl font-bold text-slate-900'>{clima.name}</h2>

                <p className='capitalize text-base font-medium text-slate-800 mt-2'>{clima.weather[0].description}</p>

                <p className='flex items-center justify-center gap-1 mt-4 text-lg'>
                  <Thermometer className='w-7 h-7 stroke-slate-200 fill-red-700'/>
                  <span className='font-semibold text-slate-950'>Temperatura: {clima.main.temp}°C</span>
                </p>

                <p className='flex items-center justify-center gap-1 mt-2 text-lg'>
                  <Droplet className='w-7 h-7 stroke-slate-900 fill-sky-500'/>
                  <span className='font-semibold text-slate-950'>Umidade: {clima.main.humidity}%</span>
                </p>
              </div>
            )  
            })()}

          </main>
        </div>
    )
}
    
export default PrevisaoDoTempo;