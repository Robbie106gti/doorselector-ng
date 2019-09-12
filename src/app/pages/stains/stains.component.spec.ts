import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StainsComponent } from './stains.component';

describe('StainsComponent', () => {
  let component: StainsComponent;
  let fixture: ComponentFixture<StainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
