import { ADD_TO_FAV } from '../constants';

const AddToFav = (itemId) => ({
  // console.log(itemId);
  type: ADD_TO_FAV,
  payload: {
    id: itemId,
  },
}
);
export default AddToFav;
