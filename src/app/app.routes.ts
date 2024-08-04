import { Routes} from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './resources/services/auth-guard.service';

export const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'dashboard', canActivate:[AuthGuardService],
loadChildren: () => import('./views/dashboard/dashboard.module')
.then((m) => m.DashboardModule)}, {path: '**', redirectTo: ''}];
