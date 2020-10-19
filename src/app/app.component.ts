import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeSwitcherService } from './services/theme-switcher.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  renderer

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeService: ThemeSwitcherService
  ) {

    setInterval(() => {
     this.themeService.cycleTheme()
    }, 2000)
    this.initializeApp();


  }
  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  addBodyClass(bodyClass) {
    // this.renderer.addClass(this.document.body, bodyClass);
  }
  removeBodyClass(bodyClass) {
    // this.renderer.removeClass(this.document.body, bodyClass);
  }

}
