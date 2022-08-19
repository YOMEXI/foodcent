import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';

import { DashboardComponent } from './dashboard/view/dashboard.component';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LandingPageComponent } from './login/view/landing-page/landing-page.component';
import { CsoRegistrationComponent } from './login/view/cso-registration/cso-registration.component';
import { UserRegistrationComponent } from './login/view/user-registration/user-registration.component';
import { NationalProjectDirectoryComponent } from './ui/npd/national-project-directory/national-project-directory.component';
import { PublicDirectoryComponent } from './login/view/public-directory/public-directory.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},

  {
    path: '',
    component: LoginMainComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'user-registration', component: UserRegistrationComponent },

      { path: 'ndp', component: NationalProjectDirectoryComponent },
    ],
  },
  { path: 'cso-registration', component: CsoRegistrationComponent },
  { path: 'public', component: PublicDirectoryComponent },

  {
    path: '',
    component: AppMainComponent,
    children: [
      // {path: '', redirectTo:"dashboard", pathMatch:"full"},
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
