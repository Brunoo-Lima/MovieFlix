import { useEffect, useState } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    toast.success('Filme removido com sucesso!');
  }

  return (
    <section className="myMovieFavorites">
      <h1>Meus Filmes</h1>

      {movie.length === 0 && <p>Você não possui nenhum filme salvo.</p>}

      <ul>
        {movie.map((movieList) => (
          <li key={movieList.id}>
            <img
              className="img-favorites"
              src={`https://image.tmdb.org/t/p/original/${movieList.poster_path}`}
              alt=""
            />
            <span className="title-movie">{movieList.title}</span>

            <div>
              <Link className="link" to={`/filme/${movieList.id}`}>
                Ver detalhes
              </Link>
              <button
                className="btn-delete"
                onClick={() => deleteMovie(movieList.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Favorites;
