import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatCard } from 'src/app/models/card';

@Component({
  selector: 'nc-mat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.scss']
})
export class MatComponent {
@Input() card: MatCard;
  constructor() { }
}
