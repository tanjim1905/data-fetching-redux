import axios from "axios";
import {
    TODOS_FAILED,
    TODOS_REQUEST,
    TODOS_SUCCESS
} from "../constants/todosConstant";

export const getAllData = () => async (dispatch) => {
  dispatch({ type: TODOS_REQUEST });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/toos");
    dispatch({ type: TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: TODOS_FAILED, payload: error.message });
  }
};
