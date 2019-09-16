import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Saved } from 'src/app/models/saved';

@Component({
  selector: 'nc-saved-door',
  templateUrl: './saved-door.component.html',
  styleUrls: ['./saved-door.component.scss']
})
export class SavedDoorComponent implements OnInit {
  @Input() savedDoor: Saved;
  @Input() i: number;
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  Remove(e) {
    console.log(true)
    this.remove.emit(this.i);
  }

}
