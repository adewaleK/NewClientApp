import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlesection1Component } from './singlesection1.component';

describe('Singlesection1Component', () => {
  let component: Singlesection1Component;
  let fixture: ComponentFixture<Singlesection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlesection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Singlesection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
