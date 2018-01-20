import { BaseQuestion } from './base-question';

export class ListQuestion extends BaseQuestion<string> {
  controlType = 'list';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
