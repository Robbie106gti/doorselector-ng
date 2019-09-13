import { Component, OnInit, Input } from '@angular/core';
import { Colors } from 'src/app/models/colors';

@Component({
  selector: 'nc-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input() card: Colors;
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
