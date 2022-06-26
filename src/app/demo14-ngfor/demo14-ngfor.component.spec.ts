import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14NgforComponent } from './demo14-ngfor.component';

describe('Demo14NgforComponent', () => {
  let component: Demo14NgforComponent;
  let fixture: ComponentFixture<Demo14NgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo14NgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo14NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
