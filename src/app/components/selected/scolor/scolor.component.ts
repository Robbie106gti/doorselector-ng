import { Component, Input } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'nc-scolor',
  templateUrl: './scolor.component.html',
  styleUrls: ['./scolor.component.scss']
})
export class ScolorComponent {
  @Input() card: Color;
    constructor() { }

}
