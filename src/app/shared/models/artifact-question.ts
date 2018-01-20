import { BaseQuestion } from './base-question';

export class ArtifactQuestion extends BaseQuestion<string> {
  controlType = 'artifact';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
