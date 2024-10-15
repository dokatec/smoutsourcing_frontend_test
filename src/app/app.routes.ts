import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroComponent } from './components/dashboard/cadastro/cadastro.component';




export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/cadastro', component: CadastroComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full'}
 
    
];
