import axios from 'axios';
import Promise from 'bluebird';
import { filters, apikey } from '../config';
import mockedCharacters from '../db/mockedCharacters';

const charactersURL = 'https://gateway.marvel.com/v1/public/characters';

export default {
  getCharacters: (character = 'Thor') => {
    return new Promise(async (resolve, reject) => {
      try {
        const URL = `${charactersURL}?apikey=${apikey}&${filters}&nameStartsWith=${character}`;
        const { data } = await axios(URL);

        resolve(data.data.results);
      } catch (error) {
        console.error(error);

        reject(mockedCharacters.data.results);
      }
    });
  },
  getCharacter: (URL) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios(`${URL}?apikey=${apikey}`);

        resolve(data.data.results);
      } catch (error) {
        console.error(error);

        reject(error);
      }
    });
  },
};
