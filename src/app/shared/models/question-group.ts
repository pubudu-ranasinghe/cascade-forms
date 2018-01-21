import { BaseQuestion } from './base-question';

export class QuestionGroup extends BaseQuestion<null> {
  questions: BaseQuestion<any>[];
  label: string;
  order: number;
  controlType = 'group';

  constructor(options: {
    questions?: BaseQuestion<any>[],
    key?: string,
    order?: number
  }) {
    super(options);
    this.questions = options.questions;
    this.label = options.key;
    this.order = options.order;
  }
}
