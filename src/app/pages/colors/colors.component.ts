import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Colors } from 'src/app/models/colors';

@Component({
  selector: 'nc-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  cards$: Observable<any[] | [Colors]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsColors);
  }

}
