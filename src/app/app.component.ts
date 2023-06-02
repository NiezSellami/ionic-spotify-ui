import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { SplashScreen } from '@capacitor/splash-screen';
import {StatusBar} from '@capacitor/status-bar';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //StatusBar.setStyle();
      SplashScreen.hide();
      document.body.classList.toggle('dark');
    });
  }
}
