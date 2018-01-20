import { BaseQuestion } from './base-question';

export class NumberQuestion extends BaseQuestion<string> {
  controlType = 'number';

  constructor(options: {} = {}) {
    super(options);
  }
}
