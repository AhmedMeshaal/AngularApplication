import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10OnewaydatabindingComponent } from './demo10-onewaydatabinding.component';

describe('Demo10OnewaydatabindingComponent', () => {
  let component: Demo10OnewaydatabindingComponent;
  let fixture: ComponentFixture<Demo10OnewaydatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo10OnewaydatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo10OnewaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
