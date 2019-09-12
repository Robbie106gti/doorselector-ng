import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdoorComponent } from './sdoor.component';

describe('SdoorComponent', () => {
  let component: SdoorComponent;
  let fixture: ComponentFixture<SdoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
