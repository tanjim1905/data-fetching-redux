import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/actions/todosAction";

const Todos = () => {
  const {todos, isLoading, error} = useSelector((state) => state);
  console.log(error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      {todos.map((todo) => (
        <div>
          <h4>{todo.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Todos;
