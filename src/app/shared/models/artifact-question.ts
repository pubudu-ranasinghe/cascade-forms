import { BaseQuestion } from './base-question';

export class ArtifactQuestion extends BaseQuestion<string> {
  controlType = 'artifact';

  constructor(options: {} = {}) {
    super(options);
  }
}
