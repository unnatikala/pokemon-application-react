import { all, fork } from "redux-saga/effects";
import { fetchPokemonListWatcher } from "./card/fetchPokemonList";

export default function* rootSaga() {
  yield all([fork(fetchPokemonListWatcher)]);
}
