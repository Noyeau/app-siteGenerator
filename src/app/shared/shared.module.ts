import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObserveVisibilityDirective } from './directives/observe-visibility.directive';
import { CounToPipe } from './pipe/counTo.pipe';


const modules = [
  IonicModule,
  ReactiveFormsModule,
  FormsModule
]

const components = [
]

const directives=[
  ObserveVisibilityDirective,
]

const pipes=[
  CounToPipe
]

@NgModule({
  declarations: [
    components,
    directives,
    pipes
  ],
  imports: [
    CommonModule,
    modules,
  ],
  exports: [
    components,
    modules,
    directives,
    pipes
  ]
})
export class SharedModule { }
