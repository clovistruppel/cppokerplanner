import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const firebaseConfig = {
  apiKey: "AIzaSyCB93KQYs0P-s_tQzysfi1XeA1V0SqmsKs",
  authDomain: "cppokerplanner.firebaseapp.com",
  projectId: "cppokerplanner",
  storageBucket: "cppokerplanner.appspot.com",
  messagingSenderId: "795066264045",
  appId: "1:795066264045:web:4843b6a178a42121c01fe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {initializeApp} from "firebase/app";

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
