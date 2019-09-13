import { Component, OnInit, Input } from '@angular/core';
import { Door } from 'src/app/models/door';
import { Color } from 'src/app/models/color';
import { Stain } from 'src/app/models/stain';

@Component({
  selector: 'nc-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.scss']
})
export class ShareCardComponent implements OnInit {
  @Input() door: Door;
  @Input() color: Color;
  @Input() stain: Stain;

  constructor() { }

  ngOnInit() {
  }

}