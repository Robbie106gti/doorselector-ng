import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Door } from 'src/app/models/door';

@Component({
  selector: 'nc-doors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './doors.component.html'
})
export class DoorsComponent implements OnInit {
  cards$: Observable<any[] | [Door]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsDoors);
  }

}
