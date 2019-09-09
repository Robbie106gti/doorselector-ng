import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, skipWhile } from 'rxjs/operators';

import * as fromStore from '../store';
import { Load } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class MatGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) { }
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      map((load: Load) => {
        if (load.loading === false && load.loaded === false) {
          this.store.dispatch({ type: fromStore.MAT_LOAD });
        }
        return load.loaded;
      }),
      skipWhile(loaded => loaded === false),
      map(loaded => loaded),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<Load> {
    return this.store.select(fromStore.loadMatAndFin);
  }
}
