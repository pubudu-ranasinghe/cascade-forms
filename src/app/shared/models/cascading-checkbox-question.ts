import { CheckboxQuestion, QuestionGroup } from './';

export class CascadingCheckboxQuestion extends CheckboxQuestion {
  options: {
    active: boolean,
    questions: QuestionGroup[]
  }[];

  constructor(options: {} = {}) {
    super(options);
  }
}
