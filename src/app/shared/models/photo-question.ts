import { BaseQuestion } from './base-question';

export class PhotoQuestion extends BaseQuestion<string> {
  controlType = 'photo';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
