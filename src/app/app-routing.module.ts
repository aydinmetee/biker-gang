import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionActiveGuard } from './core/guards/session-active.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [SessionActiveGuard],
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module').then( m => m.ProfilePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
