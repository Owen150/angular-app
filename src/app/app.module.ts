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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

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
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
