import endpoints from './apiEndpoints';


/**
 * @method getApiEndPointsFromStore
 * Takes in key which returns API based on key we send as argument.
 * @param {string} requestedKey Passed to fetch the api from object based on this key
 */

export const getApiEndPointsFromStore = requestedKey => {
  if (!requestedKey) {
    return null;
  }
  return endpoints[requestedKey];
};
