import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AventuraComponent } from './aventura/aventura.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DosjugadoresComponent } from './dosjugadores/dosjugadores.component';
import { FamiliarComponent } from './familiar/familiar.component';
import { LoginComponent } from './login/login.component';
import { NinosComponent } from './ninos/ninos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aventura', component: AventuraComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'dosjugadores', component: DosjugadoresComponent },
  { path: 'familiar', component: FamiliarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ninos', component: NinosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
