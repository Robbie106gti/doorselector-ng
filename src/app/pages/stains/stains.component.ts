import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Stains } from 'src/app/models/stains';
import { Door } from 'src/app/models/doors';

@Component({
  selector: 'nc-stains',
  templateUrl: './stains.component.html',
  styleUrls: ['./stains.component.scss']
})
export class StainsComponent implements OnInit {
  cards$: Observable<any[] | [Stains]>;
  door$: Observable<any | Door>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsStains);
    this.door$ = this.store.select(fromStore.getDoor);
  }
}
