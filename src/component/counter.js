import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { decrement, increment } from "../reducer/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const userData = useSelector((state) => state.userTwo.userData.data);
  const dispatch = useDispatch();
  console.log("Data from component -> redux -> this component", userData);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        &nbsp;
        <span>{count}</span>&nbsp;
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
