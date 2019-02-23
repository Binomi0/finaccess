import axios from 'axios';
import Promise from 'bluebird';
import { apikey } from '../config';

const options = { params: { apikey } };

export default {
  getComics: (URL) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios(URL, options);

        resolve(data.data.results);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
  getComic: (URL) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios(URL, options);

        resolve(data.data.results);
      } catch (error) {
        console.error(error);

        reject(error);
      }
    });
  },
};
