import { Component, OnInit, Input } from '@angular/core';
import { UiState } from 'src/app/store/reducers/ui.reducer';

@Component({
  selector: 'nc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() uiState: UiState;

  constructor() { }

  ngOnInit() {
  }

}
