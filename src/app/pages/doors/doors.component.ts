import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Door } from 'src/app/models/doors';

@Component({
  selector: 'nc-doors',
  templateUrl: './doors.component.html'
})
export class DoorsComponent implements OnInit {
  cards$: Observable<any[] | [Door]>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.cards$ = this.store.select(fromStore.itemsDoors);
  }

}
