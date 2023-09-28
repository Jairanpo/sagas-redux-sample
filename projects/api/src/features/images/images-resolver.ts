import axios from "axios"

const PLACE_KEANU_URL = "https://placekeanu.com"

function extractImage(value: string) {
  const regex = /data:image\/([a-zA-Z]*);base64,([^"]*)/;
  const matches = value.match(regex);

  if (matches && matches.length === 3) {
    const mimeType = matches[1];
    const base64Data = matches[2];
    return {
      mimeType,
      base64Data,
    };
  }

  return null;
}

const queryImages = async(_, args:{
  input: {
    width: number
    height: number
    young?: boolean
    grayscale?: boolean
  }
})=>{ 
  try{
    const {width, height, young = false, grayscale = false} = args.input 
    const options = `${young ? "y" : ""}${grayscale ? "g" : ""}`
    const url = `${PLACE_KEANU_URL}/${width}/${height}/${options}`
    return {
      status: 'success',
      message: 'Image loaded from placekeanu.com',
      data: {
        image: url
      }
    }
  }catch(err){
    if(err instanceof Error){
      return {
        status: 'error',
        message: "Server error",
        code: 500
      }
    }
  }
}


export default {
  Query: {
    queryImages: queryImages
  },
  QueryImageResult: {
      __resolveType: function resolveType(obj: {status: string}) {
        switch (obj.status) {
          case 'success':
            return 'QueryImageSuccess'
          case 'invalid':
            return 'Invalid'
          case 'error':
            return 'Error'
          default:
            return null
        }
      },
    },
}
