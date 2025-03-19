import { useEffect, useState } from 'react';
import CrearPelicula from './components/CrearPelicula';

function App() {

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
      const traerPeliculas = async () => {
        const query = await fetch('http://localhost:3000/peliculas');
        const res = await query.json();
        setPeliculas(res);
      }

      traerPeliculas();
  }, []);

  
  return (
    <div className='m-0 p-0'>
      <header className='m-3 flex justify-center font-bold underline text-2xl'>
        <h1>PRACTICA FINAL</h1>
      </header>
      <main>
        <CrearPelicula onCreate={peliculas}/>
        <table className='border-2   w-full table-auto text-left min-w-max'>
          <thead className=' bg-amber-50-200'>
            <tr>
              <th className='border-2'>ID</th>
              <th className='border-2'>Autor</th>
              <th className='border-2'>Idioma</th>
              <th className='border-2'>Correo</th>
              <th className='border-2'>Numero</th>
            </tr>
          </thead>
          {peliculas.map((pelicula) => {
            return (
              <tbody className='odd:bg-rose-200 even:bg-blue-200'>
                <tr>
                  <td className='border-2'>{pelicula.id}</td>
                  <td className='border-2'>{pelicula.autor}</td>
                  <td className='border-2'>{pelicula.idioma}</td>
                  <td className='border-2'>{pelicula.correo}</td>
                  <td className='border-2'>{pelicula.numero}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </main>
    </div>
  )
}

export default App
