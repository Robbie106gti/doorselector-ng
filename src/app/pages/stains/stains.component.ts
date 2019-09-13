import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Stain } from 'src/app/models/stain';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-stains',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stains.component.html'
})
export class StainsComponent implements OnInit {
  cards$: Observable<any[] | [Stain]>;
  door$: Observable<any | Door>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsStains);
    this.door$ = this.store.select(fromStore.getDoor);
  }
}
