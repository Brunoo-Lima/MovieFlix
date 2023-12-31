import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie/Movie';
import Header from './Components/Header';
import Error from './Components/utilities/Error';
import Favorites from './Components/Movie/Favorites/Favorites';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <ToastContainer autoClose={3000} className="toast" />
      <BrowserRouter>
        <Header />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Movie />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
