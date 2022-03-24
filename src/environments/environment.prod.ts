import {
  here_apiKey,
  here_appId,
  here_authDomain,
  here_databaseURL,
  here_locationId,
  here_messagingSenderId,
  here_projectId,
  here_storageBucket,
} from './internal'; // REMOVE these import and fill the values directly down

export const environment = {
  firebase: {
    projectId: here_projectId,
    appId: here_appId,
    databaseURL: here_databaseURL,
    storageBucket: here_storageBucket,
    locationId: here_locationId, //this is optional
    apiKey: here_apiKey,
    authDomain: here_authDomain,
    messagingSenderId: here_messagingSenderId,
  },
  production: true,
};
