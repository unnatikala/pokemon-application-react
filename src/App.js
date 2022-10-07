import React from "react";
import { Route, Switch } from "react-router-dom";

import PokemonHomePage from "./components/card/PokemonHomePage";
import PokemonCardDetails from "./components/card/PokemonCardDetails";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PokemonHomePage} />
        <Route
          path="/viewSinglePokemonRecord/:id"
          component={PokemonCardDetails}
        />
      </Switch>
    </div>
  );
};

export default App;
//import the css
