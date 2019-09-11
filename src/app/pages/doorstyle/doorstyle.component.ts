import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { MatCard } from 'src/app/models/cards';

@Component({
  selector: 'nc-doorstyle',
  templateUrl: './doorstyle.component.html',
  styleUrls: ['./doorstyle.component.scss']
})
export class DoorstyleComponent implements OnInit {
  cards$: Observable<any[] | [MatCard]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsDoorstyles);
  }

}
