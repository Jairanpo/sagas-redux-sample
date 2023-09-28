import { call, put, select } from "redux-saga/effects";
import { queryImage } from "./requestImages";
import { addImage, setSelectedImage } from "../reducer";


export function* handleQueryImage(action){
  try{
    const {width, height, grayscale, young} = action.payload

    const keyName = `${width}_${height}_${grayscale}_${young}`
    const existingData = yield select(state => {
      return state?.images.fetched[keyName]
    });

    if(existingData){
      yield put(setSelectedImage(existingData))
    }

    if (!existingData){
      const response = yield call(queryImage(action.payload));
      const { data } = response
      const payload = {
        key: keyName,
        image: data.data.queryImages.data.image,
      }
      yield put(addImage(payload))     
    }
  }catch(err){
    console.log(err)
  }
}
