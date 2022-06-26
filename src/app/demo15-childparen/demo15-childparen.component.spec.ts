import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15ChildparenComponent } from './demo15-childparen.component';

describe('Demo15ChildparenComponent', () => {
  let component: Demo15ChildparenComponent;
  let fixture: ComponentFixture<Demo15ChildparenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo15ChildparenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo15ChildparenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
