import { BaseQuestion } from './base-question';

export class NumberQuestion extends BaseQuestion<string> {
  controlType = 'number';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
