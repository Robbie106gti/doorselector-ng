import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { MatCard } from 'src/app/models/card';

@Component({
  selector: 'nc-doorstyle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './doorstyle.component.html'
})
export class DoorstyleComponent implements OnInit {
  cards$: Observable<any[] | [MatCard]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsDoorstyles);
  }

}
