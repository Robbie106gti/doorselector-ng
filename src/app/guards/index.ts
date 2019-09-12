// import component from ''
import { MatGuard } from './mat.guard';
import { DoorstyleGuard } from './doorstyle.guard';
import { DoorsGuard } from './doors.guard';
import { ColorsGuard } from './colors.guard';
import { StainsGuard } from './stains.guard';

export const guards: any[] = [
  MatGuard,
  DoorstyleGuard,
  DoorsGuard,
  ColorsGuard,
  StainsGuard
];

// export * from ''
export * from './mat.guard';
export * from './doorstyle.guard';
export * from './doors.guard';
export * from './colors.guard';
export * from './stains.guard';
