import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcSidebarComponent } from './nc-sidebar.component';

describe('NcSidebarComponent', () => {
  let component: NcSidebarComponent;
  let fixture: ComponentFixture<NcSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
