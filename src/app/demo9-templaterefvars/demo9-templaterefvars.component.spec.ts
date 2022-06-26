import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo9TemplaterefvarsComponent } from './demo9-templaterefvars.component';

describe('Demo9TemplaterefvarsComponent', () => {
  let component: Demo9TemplaterefvarsComponent;
  let fixture: ComponentFixture<Demo9TemplaterefvarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo9TemplaterefvarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo9TemplaterefvarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
