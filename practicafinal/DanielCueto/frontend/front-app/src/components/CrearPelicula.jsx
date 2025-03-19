import { useState } from "react";

export default function CrearPelicula({ onCreate }) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const response = await fetch('http://localhost:3000/peliculas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    if (response.ok) {
      const peliculaCreada = await response.json();
      onCreate(peliculaCreada);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text"  name="titulo" placeholder="tutulo"/>
          <input onChange={handleChange}type="text"  name="autor" placeholder="autor"/>
          <input onChange={handleChange}type="text"  name="idioma" placeholder="idioma"/>
          <input onChange={handleChange}type="date"  name="publicacion" placeholder="fecha publicacion"/>
          <input onChange={handleChange}type="email" name="correo" placeholder="correo@example.com"  id="" />
          <input onChange={handleChange}type="number"name="numero" placeholder="77667376" />
          <input className='border-1 rounded-4xl' type="submit" value='Crear pelicula' />
        </form>
    );
}