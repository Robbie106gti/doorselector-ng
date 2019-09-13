import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoKnownComponent } from './also-known.component';

describe('AlsoKnownComponent', () => {
  let component: AlsoKnownComponent;
  let fixture: ComponentFixture<AlsoKnownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsoKnownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoKnownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
