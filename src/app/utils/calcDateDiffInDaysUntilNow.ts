import { MILLISECONDS_IN_A_DAY } from './constants';

export function calcDateDiffInDaysUntilNow(date: number | undefined): number {
  if (!date) {
    return 0;
  }

  return Math.ceil(
    Math.abs((new Date().getTime() - date) / MILLISECONDS_IN_A_DAY)
  );
}
