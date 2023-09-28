import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./pages/sessions/sessions.module').then( m => m.SessionsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./pages/presentateurs/presentateurs.module').then( m => m.PresentateursPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./pages/note/note.module').then( m => m.NotePageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
