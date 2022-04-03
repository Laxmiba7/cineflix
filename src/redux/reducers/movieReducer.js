/* eslint-disable no-case-declarations */
import { ADD_TO_FAV, MOVIE_LIST, SEARCH_ITEM } from '../constants';

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

      const favProduct = state.movie.filter(
        (product) => product.id === action.payload.id,
      )[0];

      return {
        ...state,
        fav: inFav ? [...state.fav] : [...state.fav, { ...favProduct }],
      };

    case SEARCH_ITEM:
      // eslint-disable-next-line eqeqeq
      const item = Object.values(action.payload.title);
      const searchedItems = state.movie.find(
        (x) => x.title === item[0],
      );

      return {
        ...state,
        movie: searchedItems,
      };

    default:
      return state;
  }
};
export default movieReducer;
