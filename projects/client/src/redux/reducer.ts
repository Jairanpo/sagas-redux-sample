export const GET_IMAGE = "GET_IMAGE";
export const ADD_IMAGE = "ADD_IMAGE";
export const SET_SELECTED_IMAGE = "SET_SELECTED_IMAGE"
import { ImageRequest } from "../types/graphql-input-types";

export const getImage = (payload: ImageRequest) => {
  return {
    type: GET_IMAGE,
    payload,
  };
};

export const addImage = (payload: Record<string, string | number>) => {
  return {
    type: ADD_IMAGE,
    payload,
  };
};

export const setSelectedImage = (payload: Record<string, string>) => {
  return {
    type: SET_SELECTED_IMAGE,
    payload,
  }
}

const initialState = {
  selected: null,
  fetched: {}
};

export default (
  state = initialState,
  action: { type: string; payload: Record<string, string> }
) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        selected: action.payload.image,
        fetched: {
          ...state.fetched,
          [action.payload.key]: action.payload.image
        }
      };
    case SET_SELECTED_IMAGE:
      return {
        fetched: {...state.fetched},
        selected: action.payload 
      };
    default:
      return state;
  }
};
