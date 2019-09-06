import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { UiState } from './store/reducers/ui.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public innerWidth: any;
  uiState$: Observable<UiState>;

  constructor(private store: Store<fromStore.State>) {}

  @HostListener('window:resize', ['$event']) onResize() {
    this.innerWidth = window.innerWidth;
    const mobile = this.innerWidth < 765 ? true : false;
    this.store.dispatch({
      type: fromStore.MOBILE,
      payload: mobile
    });
  }

  ngOnInit() {
      this.uiState$ = this.store.select(fromStore.getUiState);
      this.onResize();
  }
}
