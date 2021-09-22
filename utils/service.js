import axios from 'axios';
import { getApiEndPointsFromStore } from './common';

const ApiService = ({
  method = 'GET',
  apiUrl,
  data,
  appendUrl = '',
  headers = {},
}) => {
  const url = getApiEndPointsFromStore(apiUrl) + appendUrl;
  return new Promise((resolve, reject) => {
    axios({ url, method, data, headers })
      .then(response => {
        resolve({ response });
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default ApiService;
