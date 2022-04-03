import { ADD_TO_FAV } from '../constants';

const AddToFav = (itemId) => ({
  type: ADD_TO_FAV,
  payload: {
    id: itemId,
  },
}
);
export default AddToFav;
