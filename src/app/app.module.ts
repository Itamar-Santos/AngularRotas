import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:PrincipalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SobreComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
