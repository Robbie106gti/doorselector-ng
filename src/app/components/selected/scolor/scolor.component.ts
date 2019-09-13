import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'nc-scolor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scolor.component.html',
  styleUrls: ['./scolor.component.scss']
})
export class ScolorComponent {
  @Input() card: Color;
    constructor() { }

}
