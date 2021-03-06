import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'nc-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input() card: Color;
  link: string;
    constructor() { }

    ngOnInit() {
      this.link = this.makeLink();
    }

    makeLink() {
      // tslint:disable-next-line: max-line-length
      const newlink = this.card.Material === 'WOOD' ? this.card.item_name.toLocaleLowerCase() : this.card.item_name.toLocaleLowerCase() + '/share';
      return newlink;
    }

}
