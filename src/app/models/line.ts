export interface Line {
  title: string;
  icon: string;
  active: boolean;
}

export interface ProductLines {
  cornerstone: Line;
  custom: Line;
  active?: string;
}
