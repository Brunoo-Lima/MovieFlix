import { useEffect, useState } from 'react';
import api from './Services/api';
import { Link } from 'react-router-dom';
import './Home.css';
import Loading from './utilities/Loading';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '12a8ab1e01e0fc409c8aa416542ac371',
          language: 'pt-BR',
          page: 1,
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    }
    loadMovies();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className=" container">
      <div className="list-movies">
        {movies.map((movie) => (
          <article key={movie.id}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Link to={`/filme/${movie.id}`}>Acessar</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
