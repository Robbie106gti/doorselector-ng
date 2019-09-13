import { Component, OnInit, Input } from '@angular/core';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-also-known',
  templateUrl: './also-known.component.html',
  styleUrls: ['./also-known.component.scss']
})
export class AlsoKnownComponent implements OnInit {
  @Input() door: Door;

  constructor() { }

  ngOnInit() {
    // console.log(this.door);
  }

}
