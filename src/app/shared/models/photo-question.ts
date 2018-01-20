import { BaseQuestion } from './base-question';

export class PhotoQuestion extends BaseQuestion<string> {
  controlType = 'photo';

  constructor(options: {} = {}) {
    super(options);
  }
}
