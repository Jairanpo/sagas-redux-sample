import axios from "axios";
import { QUERY_IMAGES_GQL } from "../graphql";

const API_URL = "http://localhost:8080/api";

export function queryImage(args) {
  const {width, height, young, grayscale} = args
  return () =>
    axios.post(
      API_URL,
      {
        query: QUERY_IMAGES_GQL,
        variables: {
          input: {
            width, height, young, grayscale
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
}
