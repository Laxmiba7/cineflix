import { SEARCH_ITEM } from '../constants';

const SearchItem = (itemTitle) => ({
  type: SEARCH_ITEM,
  payload: {
    title: itemTitle,
  },
});
export default SearchItem;
