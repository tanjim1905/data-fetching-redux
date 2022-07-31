import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../constants/todosConstant";

const todosInitialStates = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = todosInitialStates, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
      };

    case TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;