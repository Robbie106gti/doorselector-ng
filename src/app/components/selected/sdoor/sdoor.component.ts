import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-sdoor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sdoor.component.html',
  styleUrls: ['./sdoor.component.scss']
})
export class SdoorComponent {
  @Input() card: Door;

  constructor() { }
}
