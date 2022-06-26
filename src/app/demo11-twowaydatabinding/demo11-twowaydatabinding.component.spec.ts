import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11TwowaydatabindingComponent } from './demo11-twowaydatabinding.component';

describe('Demo11TwowaydatabindingComponent', () => {
  let component: Demo11TwowaydatabindingComponent;
  let fixture: ComponentFixture<Demo11TwowaydatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo11TwowaydatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo11TwowaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
