import axios from 'axios';
import { MOVIE_LIST } from '../constants';

const fetchData = () => async (dispatch) => {
  const apiKey = 'api_key=00d82371d477e875486a05abe6476c67';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?${apiKey}`;
  const res = await axios.get(apiUrl);
  const newData = res.data.results.map((i) => (

    {
      ...i,

    }));

  dispatch({
    type: MOVIE_LIST,
    payload: newData || [],
  });
};
export default fetchData;
