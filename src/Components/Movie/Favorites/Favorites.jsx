import { useEffect, useState } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@movieflix');
    setMovie(JSON.parse(myList)) || [];
  }, []);

  function deleteMovie(id) {
    let filterMovie = movie.filter((movie) => {
      return movie.id !== id;
    });

    setMovie(filterMovie);
    localStorage.setItem('@movieflix', JSON.stringify(filterMovie));
  }

  return (
    <section className="myMovieFavorites">
      <h1>Meus Filmes</h1>

      {movie.length === 0 && <span>Você não possui nenhum filme salvo.</span>}

      <ul>
        {movie.map((movieList) => (
          <li key={movieList.id}>
            <span>{movieList.title}</span>
            <div>
              <Link to={`/filme/${movieList.id}`}>Ver detalhes</Link>
              <button onClick={() => deleteMovie(movieList.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Favorites;
