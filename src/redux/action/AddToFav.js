import { ADD_TO_FAV } from "../constants"

const AddToFav = (itemId, value) => {
  return (
    type: ADD_TO_FAV,
    payload: {
        id: itemId,
        value
    }
  )
}
export default AddToFav;
