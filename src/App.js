import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/reducers/store';
import './App.css';
import Movies from './components/Movies';
import Favorites from './components/Favorites';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />

          <Route path="favorites" element={<Favorites />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
