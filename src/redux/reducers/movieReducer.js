import { MOVIE_LIST } from '../constants';

const initialState = {
  movie: [],
  isLoading: true,
  cart: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return {
        ...state,
        movie: action.payload,
      };

    default:
      return state;
  }
};
export default movieReducer;
