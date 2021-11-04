import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService]},
  {path: 'office-hours', component: OfficeHoursComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
