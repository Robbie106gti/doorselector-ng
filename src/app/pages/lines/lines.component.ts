import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatCard } from 'src/app/models/card';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'nc-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  cards$: Observable<any[]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsMatAndFin);
  }
}
