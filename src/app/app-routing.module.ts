import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {OfficeHoursComponent} from "./components/office-hours/office-hours.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'office-hours', component: OfficeHoursComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
