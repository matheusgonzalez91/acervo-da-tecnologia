import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonfordevsComponent } from './pythonfordevs.component';

describe('PythonfordevsComponent', () => {
  let component: PythonfordevsComponent;
  let fixture: ComponentFixture<PythonfordevsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonfordevsComponent]
    });
    fixture = TestBed.createComponent(PythonfordevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
