import { Provider } from 'react-redux';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/reducers/store';
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Movies />
      </Provider>
    </>
  );
}

export default App;
