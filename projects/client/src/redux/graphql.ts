export const QUERY_IMAGES_GQL = `
query Query($input: QueryImageInput!) {
  queryImages(input: $input) {
    ... on QueryImageSuccess {
      status
      message
      data {
        image
      }
    }
    ... on Error {
      status
      message
      code
    }
    ... on Invalid {
      status
      message
      code
    }
  }
}`
