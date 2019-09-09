import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { Store } from '@ngrx/store';

import * as apiActions from '../actions/api.actions';
import * as fromStore from '../../store';

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
      console.log('Hello from effect');
      //const results = await mySqlQuery('ds/mat&fin');

      const results = await fetch('https://webquoin.com/catalog/api/public/index.php/ds/mat&fin');
      const data = await results.json();
      console.log(results, action);
      return new apiActions.LoadMatSuccess(data);
    }),
    catchError(error => of(new apiActions.LoadMatFail(error)))
  );

}

async function mySqlQuery(query) {
  console.log(query);
  const results = await fetch('https://webquoin.com/catalog/api/public/index.php/' + query);
  const data = await results.json();
  console.log(data);
  return data;
}
