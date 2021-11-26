import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherstitleComponent } from './otherstitle.component';

describe('OtherstitleComponent', () => {
  let component: OtherstitleComponent;
  let fixture: ComponentFixture<OtherstitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherstitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherstitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
