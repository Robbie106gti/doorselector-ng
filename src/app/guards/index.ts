// import component from ''
import { MatGuard } from './mat.guard';
import { DoorstyleGuard } from './doorstyle.guard';
import { DoorsGuard } from './doors.guard';

export const guards: any[] = [
  MatGuard,
  DoorstyleGuard,
  DoorsGuard
];

// export * from ''
export * from './mat.guard';
export * from './doorstyle.guard';
export * from './doors.guard';
