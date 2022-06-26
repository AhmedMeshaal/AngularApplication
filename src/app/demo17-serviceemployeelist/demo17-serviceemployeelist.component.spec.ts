import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17ServiceemployeelistComponent } from './demo17-serviceemployeelist.component';

describe('Demo17ServiceemployeelistComponent', () => {
  let component: Demo17ServiceemployeelistComponent;
  let fixture: ComponentFixture<Demo17ServiceemployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo17ServiceemployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo17ServiceemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
