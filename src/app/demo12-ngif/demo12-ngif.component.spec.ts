import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12NgifComponent } from './demo12-ngif.component';

describe('Demo12NgifComponent', () => {
  let component: Demo12NgifComponent;
  let fixture: ComponentFixture<Demo12NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo12NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo12NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
