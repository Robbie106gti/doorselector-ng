import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorstyleComponent } from './doorstyle.component';

describe('DoorstyleComponent', () => {
  let component: DoorstyleComponent;
  let fixture: ComponentFixture<DoorstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
