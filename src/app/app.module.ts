import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    ParentComponent,
    ChildComponent,
    TestComponentComponent,
    StructuralDirectivesComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
