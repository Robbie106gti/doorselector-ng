import { RouterEffects } from './router.effects';
import { UiEffects } from './ui.effects';
import { ApiEffects } from './api.effects';

export const effects: any[] = [
  RouterEffects,
  UiEffects,
  ApiEffects
];

export * from './router.effects';
export * from './ui.effects';
export * from './api.effects';
