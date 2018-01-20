import { BaseQuestion } from './base-question';

export class ListQuestion extends BaseQuestion<string> {
  controlType = 'list';

  constructor(options: {} = {}) {
    super(options);
  }
}
