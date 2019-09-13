import { Component, Input } from '@angular/core';
import { Colors } from 'src/app/models/colors';

@Component({
  selector: 'nc-scolor',
  templateUrl: './scolor.component.html',
  styleUrls: ['./scolor.component.scss']
})
export class ScolorComponent {
  @Input() card: Colors;
    constructor() { }

}
