import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Door } from 'src/app/models/door';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Color } from 'src/app/models/color';
import { Stain } from 'src/app/models/stain';

@Component({
  selector: 'nc-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './share.component.html'
})
export class ShareComponent implements OnInit {
  door$: Observable<any | Door>;
  color$: Observable<any | Color>;
  stain$: Observable<any | Stain>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.door$ = this.store.select(fromStore.getDoor);
    this.color$ = this.store.select(fromStore.getColor);
    this.stain$ = this.store.select(fromStore.getStain);
  }
}
