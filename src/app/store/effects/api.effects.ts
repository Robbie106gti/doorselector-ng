import { Injectable } from '@angular/core';
import * as apiActions from '../actions/api.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Router } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class ApiEffects {
  constructor(
    private store: Store<fromStore.State>,
    private actions$: Actions,
    private router: Router
  ) { }

  @Effect()
  load_mat$ = this.actions$.pipe(
    ofType(apiActions.MAT_LOAD),
    switchMap(async (action: { type: string; payload: any }) => {
      const results = await searchWebquoin(action.payload);
      return new apiActions.LoadMatSuccess(results);
    }),
    catchError(error => of(new apiActions.LoadMatFail(error)))
  );

}

async function searchWebquoin(query) {
  const results = await fetch('https://webquoin.com/catalog/api/public/index.php/search/' + query);
  const data = await results.json();
  console.log(data);
  return data;
}
