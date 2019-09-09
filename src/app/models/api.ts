import { ToolTip } from './ToolTip';

export interface Mat {
  title: string;
  image: string;
  options?: Options;
  toolTip?: ToolTip;
}

export interface Load {
  loading: boolean;
  loaded: boolean;
}

export interface Options {
  title: string;
}
