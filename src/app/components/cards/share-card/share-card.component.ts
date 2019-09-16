import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Saved } from 'src/app/models/saved';
import { Door } from 'src/app/models/door';
import { Color } from 'src/app/models/color';
import { Stain } from 'src/app/models/stain';

@Component({
  selector: 'nc-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.scss']
})
export class ShareCardComponent implements OnInit {
  @Input() door: Door;
  @Input() color: Color;
  @Input() stain: Stain;
  @Output() saveDoor = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  SaveDoor() {
    const save: Saved = {
      door: this.door,
      color: this.color,
      stain: this.stain
    };
    this.saveDoor.emit(save);
  }

}
