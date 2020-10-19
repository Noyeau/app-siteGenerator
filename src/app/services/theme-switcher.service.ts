import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private themes: Theme[] = [
    {
      name: 'day',
      styles: [
        { themeVariable: '--ion-color-primary', value: '#f8383a' },
        // { themeVariable: '--ion-background-color', value: '#f94c4e' }
      ]
    }
  ];
  private currentTheme: number = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
    this.initTheme(defaultTheme)
    this.initTheme(pinkTheme)

  }

  cycleTheme(): void {

    if (this.themes.length > this.currentTheme + 1) {
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  setTheme(name): void {

    let theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {

      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }


  initTheme(themeTxt) {
    let newTheme = {
      name: themeTxt.name,
      styles: []
    }
    themeTxt.class.split(';').map(data => {
      newTheme.styles.push({ themeVariable: data.split(':')[0], value: data.split(':')[1] })
    })
    this.themes.push(newTheme)
  }

}


const pinkTheme = {
  name: 'pink',
  class:
    `--ion-color-primary: #fd58f8;
--ion-color-primary-rgb: 253,88,248;
--ion-color-primary-contrast: #000000;
--ion-color-primary-contrast-rgb: 0,0,0;
--ion-color-primary-shade: #df4dda;
--ion-color-primary-tint: #fd69f9;

--ion-color-secondary: #ff94d8;
--ion-color-secondary-rgb: 255,148,216;
--ion-color-secondary-contrast: #000000;
--ion-color-secondary-contrast-rgb: 0,0,0;
--ion-color-secondary-shade: #e082be;
--ion-color-secondary-tint: #ff9fdc;

--ion-color-tertiary: #ffc2f5;
--ion-color-tertiary-rgb: 255,194,245;
--ion-color-tertiary-contrast: #000000;
--ion-color-tertiary-contrast-rgb: 0,0,0;
--ion-color-tertiary-shade: #e0abd8;
--ion-color-tertiary-tint: #ffc8f6;

--ion-color-success: #bb00ff;
--ion-color-success-rgb: 187,0,255;
--ion-color-success-contrast: #ffffff;
--ion-color-success-contrast-rgb: 255,255,255;
--ion-color-success-shade: #a500e0;
--ion-color-success-tint: #c21aff;

--ion-color-warning: #ff7b00;
--ion-color-warning-rgb: 255,123,0;
--ion-color-warning-contrast: #000000;
--ion-color-warning-contrast-rgb: 0,0,0;
--ion-color-warning-shade: #e06c00;
--ion-color-warning-tint: #ff881a;

--ion-color-danger: #eb445a;
--ion-color-danger-rgb: 235,68,90;
--ion-color-danger-contrast: #ffffff;
--ion-color-danger-contrast-rgb: 255,255,255;
--ion-color-danger-shade: #cf3c4f;
--ion-color-danger-tint: #ed576b;

--ion-color-dark: #222428;
--ion-color-dark-rgb: 34,36,40;
--ion-color-dark-contrast: #ffffff;
--ion-color-dark-contrast-rgb: 255,255,255;
--ion-color-dark-shade: #1e2023;
--ion-color-dark-tint: #383a3e;

--ion-color-medium: #92949c;
--ion-color-medium-rgb: 146,148,156;
--ion-color-medium-contrast: #ffffff;
--ion-color-medium-contrast-rgb: 255,255,255;
--ion-color-medium-shade: #808289;
--ion-color-medium-tint: #9d9fa6;

--ion-color-light: #f4f5f8;
--ion-color-light-rgb: 244,245,248;
--ion-color-light-contrast: #000000;
--ion-color-light-contrast-rgb: 0,0,0;
--ion-color-light-shade: #d7d8da;
--ion-color-light-tint: #f5f6f9;`
}


const defaultTheme = {
  name: 'default',
  class:
    `--ion-color-primary: #3880ff;
 --ion-color-primary-rgb: 56, 128, 255;
 --ion-color-primary-contrast: #ffffff;
 --ion-color-primary-contrast-rgb: 255, 255, 255;
 --ion-color-primary-shade: #3171e0;
 --ion-color-primary-tint: #4c8dff;
 --ion-color-secondary: #3dc2ff;
 --ion-color-secondary-rgb: 61, 194, 255;
 --ion-color-secondary-contrast: #ffffff;
 --ion-color-secondary-contrast-rgb: 255, 255, 255;
 --ion-color-secondary-shade: #36abe0;
 --ion-color-secondary-tint: #50c8ff;
 --ion-color-tertiary: #5260ff;
 --ion-color-tertiary-rgb: 82, 96, 255;
 --ion-color-tertiary-contrast: #ffffff;
 --ion-color-tertiary-contrast-rgb: 255, 255, 255;
 --ion-color-tertiary-shade: #4854e0;
 --ion-color-tertiary-tint: #6370ff;
 --ion-color-success: #2dd36f;
 --ion-color-success-rgb: 45, 211, 111;
 --ion-color-success-contrast: #ffffff;
 --ion-color-success-contrast-rgb: 255, 255, 255;
 --ion-color-success-shade: #28ba62;
 --ion-color-success-tint: #42d77d;
 --ion-color-warning: #ffc409;
 --ion-color-warning-rgb: 255, 196, 9;
 --ion-color-warning-contrast: #000000;
 --ion-color-warning-contrast-rgb: 0, 0, 0;
 --ion-color-warning-shade: #e0ac08;
 --ion-color-warning-tint: #ffca22;
 --ion-color-danger: #eb445a;
 --ion-color-danger-rgb: 235, 68, 90;
 --ion-color-danger-contrast: #ffffff;
 --ion-color-danger-contrast-rgb: 255, 255, 255;
 --ion-color-danger-shade: #cf3c4f;
 --ion-color-danger-tint: #ed576b;
 --ion-color-dark: #222428;
 --ion-color-dark-rgb: 34, 36, 40;
 --ion-color-dark-contrast: #ffffff;
 --ion-color-dark-contrast-rgb: 255, 255, 255;
 --ion-color-dark-shade: #1e2023;
 --ion-color-dark-tint: #383a3e;
 --ion-color-medium: #92949c;
 --ion-color-medium-rgb: 146, 148, 156;
 --ion-color-medium-contrast: #ffffff;
 --ion-color-medium-contrast-rgb: 255, 255, 255;
 --ion-color-medium-shade: #808289;
 --ion-color-medium-tint: #9d9fa6;
 --ion-color-light: #f4f5f8;
 --ion-color-light-rgb: 244, 245, 248;
 --ion-color-light-contrast: #000000;
 --ion-color-light-contrast-rgb: 0, 0, 0;
 --ion-color-light-shade: #d7d8da;
 --ion-color-light-tint: #f5f6f9;`
}