import { useEffect, useState } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@movieflix');
    setMovie(JSON.parse(myList)) || [];
  }, []);
  return (
    <section className="myMovieFavorites">
      <h1>Meus Filmes</h1>

      <ul>
        {movie.map((movieList) => (
          <li key={movieList.id}>
            <span>{movieList.title}</span>
            <div>
              <Link to={`/filme/${movieList.id}`}>Ver detalhes</Link>
              <button>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Favorites;
