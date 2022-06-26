import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHttpListComponent } from './employee-http-list.component';

describe('EmployeeHttpListComponent', () => {
  let component: EmployeeHttpListComponent;
  let fixture: ComponentFixture<EmployeeHttpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHttpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHttpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
