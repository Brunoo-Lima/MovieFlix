import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie/Movie';
import Header from './Components/Header';
import Error from './Components/utilities/Error';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
