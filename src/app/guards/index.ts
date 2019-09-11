// import component from ''
import { MatGuard } from './mat.guard';
import { DoorstyleGuard } from './doorstyle.guard';

export const guards: any[] = [
  MatGuard,
  DoorstyleGuard
];

// export * from ''
export * from './mat.guard';
export * from './doorstyle.guard';
