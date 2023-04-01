//imports necesarios para el routing
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { LoginComponentComponent } from "./components/login-component/login-component.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";

//Define routes
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: 'registro', component: RegisterComponent}
];

//Export routes
export const appRoutingProvider:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);