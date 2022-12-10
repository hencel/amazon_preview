import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ReadyPageComponent } from './ready-page/ready-page.component';

const routes: Routes = [
  { path: 'logging', component: LoggingComponent },
  { path: 'main-form', component: MainFormComponent},
  { path: '', component: LoggingComponent},
  { path: '**', component: ReadyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
