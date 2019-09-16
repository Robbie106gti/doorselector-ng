import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDoorComponent } from './saved-door.component';

describe('SavedDoorComponent', () => {
  let component: SavedDoorComponent;
  let fixture: ComponentFixture<SavedDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
