import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { MatCard } from 'src/app/models/card';

@Component({
  selector: 'nc-material',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit {
  cards$: Observable<any[] | [MatCard]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsMatAndFin);
  }

}
