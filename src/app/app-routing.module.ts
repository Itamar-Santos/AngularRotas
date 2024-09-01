import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PrincipalComponent } from './principal/principal.component';




const router: Routes =[]
const appRoutes: Routes = [
//{path:'', redirectTo:'principal', component:PrincipalComponent},
{path:'principal', loadChildren: () => import('./app.module').then(m => m.AppModule)},
{path:'sobre', loadChildren: () => import('./app.module').then(m => m.AppModule)},
{path: 'usuario', loadChildren: () => import ('./app.module').then(m => m.AppModule)},   
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
