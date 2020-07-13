import React, { useState, useContext } from "react";

import { actions, createAction } from "./hooh_redux/actions/action";
import { AppContext } from "./hooh_redux/reducers/reducer";

const Bouton = () => {
  const dispatch = useContext(AppContext);
  const [pluscount, setPluscount] = useState(0);
  console.log("ENTER bouton : ");
  console.log("pluscount = : ");
  console.log(pluscount);

  const handleOnClick = () => {
    console.log("START CLIC");
    dispatch(createAction(actions.ADD_ITEM, pluscount));
    console.log("END CLIC");
    console.log("apres END CLIC :" + pluscount);
  };

  return (
    <div>
      <button onClick={() => setPluscount(pluscount + 1)}>
        pluscount vaut : {pluscount}
      </button>
      <button onClick={handleOnClick}>Modifier</button>
    </div>
  );
};

export default Bouton;
