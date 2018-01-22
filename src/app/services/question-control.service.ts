import { Injectable } from '@angular/core';
import { QuestionGroup } from '../shared/models/index';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseQuestion } from '../shared/models/base-question';

@Injectable()
export class QuestionControlService {

  constructor() { }

  public toFormGroup(questions: QuestionGroup): FormGroup {
    const fg = new FormGroup({});
    questions.questions.forEach(question => {
      if (question.controlType === 'group') {
        const group = this.toFormGroup(question as QuestionGroup);
        fg.addControl(question.key, group);
      } else if (question.cascade) {
        fg.addControl(question.key, new FormControl());
        question.cascadeGroups.forEach(cg => {
          if (cg.active) {
            fg.addControl(question.key + cg.questions.key, this.toFormGroup(cg.questions));
          }
        });
      } else {
        fg.addControl(question.key, new FormControl());
      }
    });
    return fg;
  }

}
