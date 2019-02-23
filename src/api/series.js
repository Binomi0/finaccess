import axios from 'axios';
import Promise from 'bluebird';

import { apikey } from '../config';

// const comicsURL = 'https://gateway.marvel.com/v1/public/comics';
// const options = `&limit=${results}`;
const options = { params: { apikey } };

export const getSeries = (URL) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios(URL, options);

      // console.log('getSeries data =>', data.data.results[0]);
      resolve(data.data.results);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const getSerie = (URL) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios(URL, options);

      // console.log('getSerie results =>', data.data.results[0]);
      resolve(data.data.results[0]);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
