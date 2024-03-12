import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariablesComponent } from './template-reference-variables.component';

describe('TemplateReferenceVariablesComponent', () => {
  let component: TemplateReferenceVariablesComponent;
  let fixture: ComponentFixture<TemplateReferenceVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateReferenceVariablesComponent]
    });
    fixture = TestBed.createComponent(TemplateReferenceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
