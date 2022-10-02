import { SortColumn, SortDirection } from './skills-table.component';

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
