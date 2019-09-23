// import component from ''
import { MatGuard } from './mat.guard';
import { DoorstyleGuard } from './doorstyle.guard';
import { DoorsGuard } from './doors.guard';
import { ColorsGuard } from './colors.guard';
import { StainsGuard } from './stains.guard';
import { LinesGuard } from './lines.guard';

export const guards: any[] = [
  MatGuard,
  DoorstyleGuard,
  DoorsGuard,
  ColorsGuard,
  StainsGuard,
  LinesGuard
];

// export * from ''
export * from './mat.guard';
export * from './doorstyle.guard';
export * from './doors.guard';
export * from './colors.guard';
export * from './stains.guard';
export * from './lines.guard';
