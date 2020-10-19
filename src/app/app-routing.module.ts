import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // racine == /app
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app', //On passe dans le module de la WebApp
    loadChildren: () => import('./web-app/web-app.module').then( m => m.WebAppModule)
  },
  {
    path: 'client', //On passe dans le module de la WebClient
    loadChildren: () => import('./web-client/web-client.module').then( m => m.WebClientModule)
  },
  {
    path:'**', // toute fausse url == app
    redirectTo:'app'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
