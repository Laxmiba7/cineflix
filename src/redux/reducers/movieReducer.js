/* eslint-disable no-case-declarations */
import { ADD_TO_FAV, MOVIE_LIST } from '../constants';

const initialState = {
  movie: [],
  isLoading: true,
  fav: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        movie: action.payload,
      };
    case ADD_TO_FAV:
      const inFav = state.fav.find((x) => x.id === action.payload.id);
      const favProduct = state.movie.filter((product) => product.id === action.payload.id)[0];
      return {
        ...state,
        fav: inFav ? alert('Already in your Fav List')
          : [...state.inFav, { ...favProduct }],
      };

    default:
      return state;
  }
};
export default movieReducer;
