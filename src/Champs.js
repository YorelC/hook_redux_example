import React, { useContext } from "react";
import { StateContext } from "./hook_redux/reducers/reducer";

const Champs = () => {
  const state = useContext(StateContext);
  console.log("ENter Champ : state = ");
  console.log(state);

  return <p>state.count from Champs : {state.count}</p>;
};

export default Champs;
