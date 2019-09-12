import { Component, OnInit, Input } from '@angular/core';
import { Colors } from 'src/app/models/colors';

@Component({
  selector: 'nc-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input() card: Colors;
    constructor() { }

    ngOnInit() {
    }

}
