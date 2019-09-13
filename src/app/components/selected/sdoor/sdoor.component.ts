import { Component, Input } from '@angular/core';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-sdoor',
  templateUrl: './sdoor.component.html',
  styleUrls: ['./sdoor.component.scss']
})
export class SdoorComponent {
  @Input() card: Door;

  constructor() { }
}
