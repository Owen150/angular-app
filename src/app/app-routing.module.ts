import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { HomeComponent } from './home/home.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from './first/first.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'template-driven', component: TemplateDrivenFormsComponent },
  { path: 'model-driven', component: ReactiveComponent },
  { path: 'directives', component: AttributeDirectivesComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'http', component: HttpApiComponent },
  { path: 'item', component: ItemFormComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'structural', component: StructuralDirectivesComponent },
  { path: 'test-component', component: TestComponentComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
