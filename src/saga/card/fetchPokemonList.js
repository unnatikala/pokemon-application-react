import { put, takeLatest, call } from "redux-saga/effects";
import cardConstants from "../../redux/card/cardConstants";
import apiHelper from "../apiHelper";

function* fetchPokemonListWorker(action) {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    const response = yield call(apiHelper, url + action.payload, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (response.body) {
      yield put({
        type: cardConstants.GET_CARD_LIST_SUCCESSFUL,
        data: response.body.results,
      });
    } else {
      yield put({
        type: cardConstants.GET_CARD_LIST_FAILURE,
        data: response.body.message,
      });
    }
  } catch (e) {
    yield put({ type: cardConstants.GET_CARD_LIST_FAILURE, data: e });
  }
}

export function* fetchPokemonListWatcher() {
  yield takeLatest(cardConstants.GET_CARD_LIST, fetchPokemonListWorker);
}
