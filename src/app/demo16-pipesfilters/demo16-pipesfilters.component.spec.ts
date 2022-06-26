import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16PipesfiltersComponent } from './demo16-pipesfilters.component';

describe('Demo16PipesfiltersComponent', () => {
  let component: Demo16PipesfiltersComponent;
  let fixture: ComponentFixture<Demo16PipesfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo16PipesfiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo16PipesfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
