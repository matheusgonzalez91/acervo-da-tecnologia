import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoAcervoComponent } from './nosso-acervo.component';

describe('NossoAcervoComponent', () => {
  let component: NossoAcervoComponent;
  let fixture: ComponentFixture<NossoAcervoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NossoAcervoComponent]
    });
    fixture = TestBed.createComponent(NossoAcervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
