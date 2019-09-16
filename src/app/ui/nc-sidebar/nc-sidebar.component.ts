import { Component, OnInit, Input } from '@angular/core';
import { UiState } from 'src/app/store/reducers/ui.reducer';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'nc-sidebar',
  templateUrl: './nc-sidebar.component.html',
  styleUrls: ['./nc-sidebar.component.scss']
})
export class NcSidebarComponent implements OnInit {
  @Input() uiState: UiState;
  savedDoors$: Observable<any[]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.savedDoors$ = this.store.select(fromStore.getSavedDoors);
  }

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

  Remove(e) {
    console.log(e)
    this.store.dispatch({ type: fromStore.REMOVE_DOOR, payload: e });
  }

}
