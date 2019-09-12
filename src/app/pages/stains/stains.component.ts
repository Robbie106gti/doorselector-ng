import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Stains } from 'src/app/models/stains';

@Component({
  selector: 'nc-stains',
  templateUrl: './stains.component.html',
  styleUrls: ['./stains.component.scss']
})
export class StainsComponent implements OnInit {
  cards$: Observable<any[] | [Stains]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsStains);
  }
}
