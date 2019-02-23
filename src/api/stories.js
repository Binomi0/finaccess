import axios from 'axios';
import Promise from 'bluebird';

import { apikey } from '../config';

const options = { params: { apikey } };

export default {
  getStories: (URL) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios(URL, options);

        // console.log('Comics =>', data.data.results[0]);
        resolve(data.data.results);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
  getStorie: (URL) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios(URL, options);

        // console.log('Comics =>', data.data.results[0]);
        resolve(data.data.results);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
};
