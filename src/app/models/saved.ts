import { Door } from './door';
import { Color } from './color';
import { Stain } from './stain';

export interface Saved {
  door: Door;
  color: Color;
  stain: Stain;
}
