import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo8EventbindingComponent } from './demo8-eventbinding.component';

describe('Demo8EventbindingComponent', () => {
  let component: Demo8EventbindingComponent;
  let fixture: ComponentFixture<Demo8EventbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo8EventbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo8EventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
