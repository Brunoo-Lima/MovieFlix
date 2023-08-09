import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header container">
        <Link to="/" className="logo">
          <h1>
            <span className="logo-movie">Movie</span>Flix
          </h1>
        </Link>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/favorites" className="favorites">
                Meus Filmes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
