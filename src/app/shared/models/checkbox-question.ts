import { BaseQuestion } from './base-question';

export class CheckboxQuestion extends BaseQuestion<string> {
  controlType = 'checkbox';

  constructor(options: {} = {}) {
    super(options);
  }
}
