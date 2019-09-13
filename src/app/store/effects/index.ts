import { RouterEffects } from './router.effects';
import { UiEffects } from './ui.effects';
import { ApiEffects } from './api.effects';
import { UserEffects } from './user.effects';

export const effects: any[] = [
  RouterEffects,
  UiEffects,
  ApiEffects,
  UserEffects
];

export * from './router.effects';
export * from './ui.effects';
export * from './api.effects';
export * from './user.effects';
