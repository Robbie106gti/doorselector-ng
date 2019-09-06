import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nc-sidebar',
  templateUrl: './nc-sidebar.component.html',
  styleUrls: ['./nc-sidebar.component.scss']
})
export class NcSidebarComponent implements OnInit {
  @Input() mobile: boolean;
  @Input() dark: boolean;
  @Input() open: boolean;

  constructor() {}

  ngOnInit() {  }

}
