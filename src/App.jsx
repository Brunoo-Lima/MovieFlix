import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './Components/Movie/Movie';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
