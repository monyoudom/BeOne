import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import {Login} from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    var config = {
    apiKey: "AIzaSyAV6AaeS39PKuact_JbLdZv2dg_CIPWK9Q",
    authDomain: "beone-388a3.firebaseapp.com",
    databaseURL: "https://beone-388a3.firebaseio.com",
    projectId: "beone-388a3",
    storageBucket: "beone-388a3.appspot.com",
    messagingSenderId: "117081826217"
  };
  firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

