import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomeModule),
  },
  {
    path: 'grocerypage',
    loadChildren:() => import('./grocerypage/grocerypage.module').then((m) =>m.GroceryModule)
  },
  {
    path: 'costpage',
    loadChildren:() => import('./costpage/costpage.module').then((m) =>m.CostModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
