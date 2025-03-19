export const crearPelicula = (nuevaPelicula) => {
    setPeliculas([...peliculas, nuevaPelicula]);
  };

  export const eliminarPelicula = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta pelicula?');
    if (confirmDelete) {
      await fetch(`http://localhost:3000/peliculas/${id}`, {
        method: 'DELETE',
      });
      // Refrescar peliculas después de eliminar
      setPeliculas(peliculas.filter((pelicula) => pelicula.id !== id));
    }
  };

  export const actualizarPelicula = async (id, nuevaPelicula) => {
    const response = await fetch(`http://localhost:3000/peliculas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaPelicula),
    });
  
    if (response.ok) {
      const peliculaActualizada = await response.json();
      setPeliculas(peliculas.map((pelicula) => (pelicula.id === id ? peliculaActualizada : pelicula)));
    }
  };