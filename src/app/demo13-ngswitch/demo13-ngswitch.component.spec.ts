import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13NgswitchComponent } from './demo13-ngswitch.component';

describe('Demo13NgswitchComponent', () => {
  let component: Demo13NgswitchComponent;
  let fixture: ComponentFixture<Demo13NgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo13NgswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo13NgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
