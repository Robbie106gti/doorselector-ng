import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Color } from 'src/app/models/color';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-colors',
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {
  cards$: Observable<any[] | [Color]>;
  door$: Observable<any | Door>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsColors);
    this.door$ = this.store.select(fromStore.getDoor);
  }

}
