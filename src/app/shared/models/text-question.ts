import { BaseQuestion } from './base-question';

export class TextQuestion extends BaseQuestion<string> {
  controlType = 'text';

  constructor(options: {} = {}) {
    super(options);
  }
}
