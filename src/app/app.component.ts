import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { UiState } from './store/reducers/ui.reducer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<nc-home [uiState]="(uiState$ | async)"></nc-home>`
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
