export const API_DATA ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_API_KEY,
    }
  };
export const Image_CDN ="https://image.tmdb.org/t/p/w200"

export const IMAGE_CDN_MD="https://media.themoviedb.org/t/p/w300_and_h450_bestv2"

export const IMAGE_CDN_BIG ="https://image.tmdb.org/t/p/w1280";

export const CHANGE_LANG=[{identifier:"en",name:"English"},{identifier:"tamil",name:"Tamil"},{identifier:"hindi",name:"Hindi"},{identifier:"french",name:"French"}];

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY
