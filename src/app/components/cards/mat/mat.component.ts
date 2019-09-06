import { Component, OnInit, Input } from '@angular/core';
import { MatCard } from 'src/app/models/cards';

@Component({
  selector: 'nc-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.scss']
})
export class MatComponent implements OnInit {
@Input() card: MatCard;
  constructor() { }

  ngOnInit() {
  }

}
