import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPage2Component } from './front-page2.component';

describe('FrontPage2Component', () => {
  let component: FrontPage2Component;
  let fixture: ComponentFixture<FrontPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
