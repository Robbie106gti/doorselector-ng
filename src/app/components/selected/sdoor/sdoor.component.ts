import { Component, OnInit, Input } from '@angular/core';
import { Door } from 'src/app/models/doors';

@Component({
  selector: 'nc-sdoor',
  templateUrl: './sdoor.component.html',
  styleUrls: ['./sdoor.component.scss']
})
export class SdoorComponent implements OnInit {
  @Input() card: Door;

  constructor() { }

  ngOnInit() {
  }
}
