import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Door } from 'src/app/models/doors';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'nc-share',
  templateUrl: './share.component.html'
})
export class ShareComponent implements OnInit {
  door$: Observable<any | Door>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.door$ = this.store.select(fromStore.getDoor);
  }
}
