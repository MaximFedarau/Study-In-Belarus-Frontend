//Moment JS
import moment from 'moment';

export function dateFormatting(date: Date): string {
  return moment(date).format('DD MMMM YYYY');
}
