import { Component, OnInit, Input } from '@angular/core';
import { Door } from 'src/app/models/doors';

@Component({
  selector: 'nc-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent implements OnInit {
  @Input() card: Door;

  constructor() { }

  ngOnInit() {
  }

}
