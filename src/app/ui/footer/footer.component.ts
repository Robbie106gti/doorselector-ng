import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() dark: boolean;

  constructor() { }

  ngOnInit() {
  }

}
