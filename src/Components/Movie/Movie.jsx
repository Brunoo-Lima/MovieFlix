import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../Services/api';
import './Movie.css';
import Loading from '../utilities/Loading';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '12a8ab1e01e0fc409c8aa416542ac371',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate('/', { replace: true });
          return;
        });
    }
    loadMovie();
    return () => {
      console.log('COMPONENTE FOI DESMONTADO');
    };
  }, [id, navigate]);

  if (loading) return <Loading />;
  return (
    <div className="movie-info container">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div>
        <h3>Sinopse</h3>
        <p>{movie.overview}</p>
        <strong>{movie.vote_average} /10</strong>
      </div>

      <div className="area-btn">
        <button className="btn-save">Salvar</button>
        <button className="btn-trailer">
          <a
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            target="_blank"
            rel="external noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Movie;
