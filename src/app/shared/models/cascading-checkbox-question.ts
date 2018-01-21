import { CheckboxQuestion } from './checkbox-question';
import { QuestionGroup } from './question-group';

export class CascadingCheckboxQuestion extends CheckboxQuestion {
  cascadeGroups: {
    active: boolean,
    questions: QuestionGroup
  }[];

  constructor(options: {} = {}) {
    super(options);
    this.cascade = true;
    this.cascadeGroups = options['cascadeGroups'];
  }
}
