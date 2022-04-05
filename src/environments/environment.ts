import firebase from "firebase/compat";
import {initializeApp} from "firebase/app";

export const environment = {
  production: false,
  firebaseConfig: {

    apiKey: "AIzaSyAmgqSDqo4otI6Hr4hxZGse3F77cFxAmuI",
  
    authDomain: "countries-app-b595e.firebaseapp.com",
  
    projectId: "countries-app-b595e",
  
    storageBucket: "countries-app-b595e.appspot.com",
  
    messagingSenderId: "304970335630",
  
    appId: "1:304970335630:web:d4612679ecc1f1ff4d90df"
  
  }
};

const app = initializeApp(environment.firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
