import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './conditions/conditions.component';


const routes : Routes = [
  { path: '', redirectTo: '/ReactiveForm', pathMatch: 'full' },
  { path: 'Condition', component: ConditionsComponent },
  { path: 'ReactiveForm', component:ReactiveFormComponent }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports : [RouterModule],  
})
export class AppRoutingModule { 

 
}


