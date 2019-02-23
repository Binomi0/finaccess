// import axios from 'axios';
import Promise from 'bluebird';

// import { options, apikey } from '../config';
import characters from '../db/mockedCharacters';

// const charactersURL = 'https://gateway.marvel.com/v1/public/characters';

export const getCharacters = () => {
  // console.log('Llamando a getCharacters()');
  return new Promise(async (resolve, reject) => {
    try {
      // const URL = `${charactersURL}?apikey=${apikey}${options}`;
      // const { characters } = await axios(URL);

      // console.log('CHARACTER =>', data.data.results[0]);
      setTimeout(() => {
        resolve(characters.data.results);
      }, 3000);
      // resolve(characters.data.results);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const getCharacter = (URL) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const { data } = await axios(`${URL}?apikey=${apikey}`);
      // console.log('CHARACTER =>', data.data.results[0]);
      // resolve(data.data.results);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
