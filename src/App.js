import React, { useReducer } from "react";
import Bouton from "./Bouton";
import Champs from "./Champs";

import initialstate from "./hook_redux/initialstate";
import {
  reducer,
  StateContext,
  AppContext
} from "./hook_redux/reducers/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  console.log("App value of state.count : " + state.count);

  return (
    <AppContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <p>Valeur de la state.count : {state.count}</p>
          <Bouton />
          <Champs />
        </div>
      </StateContext.Provider>
    </AppContext.Provider>
  );
}
