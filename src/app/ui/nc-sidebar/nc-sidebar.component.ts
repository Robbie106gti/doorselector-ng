import { Component, OnInit, Input } from '@angular/core';
import { UiState } from 'src/app/store/reducers/ui.reducer';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'nc-sidebar',
  templateUrl: './nc-sidebar.component.html',
  styleUrls: ['./nc-sidebar.component.scss']
})
export class NcSidebarComponent implements OnInit {
  @Input() uiState: UiState;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {  }

  Menu() {
    this.store.dispatch({
      type: fromStore.MENU,
      payload: this.uiState.sidemenu ? false : true
    });
  }

  DarkLight() {
    this.store.dispatch({
      type: fromStore.DARK_LIGHT,
      payload: this.uiState.themeColor.dark ? false : true
    });
  }

}
