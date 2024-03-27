import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpApiComponent } from './http-api/http-api.component';
import { PipesComponent } from './pipes/pipes.component';
import { InitialsPipe } from './initials.pipe';
import { ItemFormComponent } from './item-form/item-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    TestComponentComponent,
    StructuralDirectivesComponent,
    FirstComponent,
    SecondComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    DeleteConfirmationComponent,
    HttpApiComponent,
    PipesComponent,
    InitialsPipe,
    ItemFormComponent,
    TemplateDrivenFormsComponent,
    HomeComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
