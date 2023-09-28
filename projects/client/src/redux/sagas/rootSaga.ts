import { takeLatest } from "redux-saga/effects";
import { handleQueryImage } from "./handlersImages";
import { GET_IMAGE } from "../reducer";

export function* watcherSaga(){
  yield takeLatest(GET_IMAGE, handleQueryImage) 
}
