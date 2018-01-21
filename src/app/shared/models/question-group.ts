import { BaseQuestion } from './base-question';

export class QuestionGroup {
  questions: BaseQuestion<any>[];
  label: string;
  order: number;

  constructor(options: {
    questions?: BaseQuestion<any>[],
    key?: string,
    order?: number
  }) {
    this.questions = options.questions;
    this.label = options.key;
    this.order = options.order;
  }
}
