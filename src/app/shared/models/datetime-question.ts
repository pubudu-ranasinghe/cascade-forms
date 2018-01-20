import { BaseQuestion } from './base-question';

export class DatetimeQuestion extends BaseQuestion<string> {
  controlType = 'date-time';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
