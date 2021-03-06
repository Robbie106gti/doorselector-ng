import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-door',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent {
  @Input() card: Door;

  constructor() { }

}
