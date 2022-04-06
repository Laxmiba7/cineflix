import { Provider } from 'react-redux';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/reducers/store';
import './App.css';
import Movies from './components/Movies';
import Favorites from './components/Favorites';
import LoginPage from './components/LoginPage';
import MoviePage from './components/MoviePage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Provider store={store}>

        <Routes>
          {!user && (
          <Route path="/" element={<LoginPage authenticate={() => setUser(true)} />} />
          )}
          {user && (
          <>

            <Route path="movies" element={<Movies setUser={setUser} />} />
            <Route path="favorites" element={<Favorites />} />

            <Route path="/movie/:id" element={<MoviePage />} />
          </>

          )}
          <Route path="*" element={<Navigate to={user ? '/movies' : '/'} />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
