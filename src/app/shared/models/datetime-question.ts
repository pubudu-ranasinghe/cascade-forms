import { BaseQuestion } from './base-question';

export class DatetimeQuestion extends BaseQuestion<string> {
  controlType = 'dateTime';

  constructor(options: {} = {}) {
    super(options);
  }
}
