import { MILLISECONDS_IN_A_DAY } from './constants';

export function calcDateDiffInDaysUntilNow(
  date: number | string | undefined
): number {
  if (!date) {
    return 0;
  }

  return Math.ceil(
    Math.abs(new Date().getTime() - new Date(date).getTime()) /
      MILLISECONDS_IN_A_DAY
  );
}
