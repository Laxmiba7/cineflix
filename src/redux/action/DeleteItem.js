import { DELETE_ITEM } from '../constants';

const deleteItem = (itemID) => ({
  type: DELETE_ITEM,
  payload: {
    id: itemID,
  },
});

export default deleteItem;
