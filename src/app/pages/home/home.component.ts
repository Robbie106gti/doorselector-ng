import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UiState } from 'src/app/store/reducers/ui.reducer';

@Component({
  selector: 'nc-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() uiState: UiState;

  constructor() { }

}
