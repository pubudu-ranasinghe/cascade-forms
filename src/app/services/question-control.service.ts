import { Injectable } from '@angular/core';
import { QuestionGroup } from '../shared/models/index';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseQuestion } from '../shared/models/base-question';
import { Validators } from '@angular/forms/';

@Injectable()
export class QuestionControlService {

  formInstance: FormGroup;

  constructor() { }

  public toFormGroup(questions: QuestionGroup): FormGroup {
    const fg = new FormGroup({});
    questions.questions.forEach(question => {
      if (question.controlType === 'group') {
        const group = this.toFormGroup(question as QuestionGroup);
        fg.addControl(question.key, group);
      } else if (question.cascade) {
        const cq = new FormControl();
        cq.valueChanges.subscribe(val => {
          // console.log(val);
          const changedOption = question.cascadeGroups.find(q => q.key === val.toString());
          question.cascadeGroups.forEach(g => {
            g.active = false;
            fg.removeControl(question.key + g.key);
          });
          fg.addControl(question.key + changedOption.key, this.toFormGroup(changedOption.questions));
          changedOption.active = true;
          // console.log(changedOption);
        });
        fg.addControl(question.key, cq);
        question.cascadeGroups.forEach(cg => {
          if (cg.active) {
            fg.addControl(question.key + cg.questions.key, this.toFormGroup(cg.questions));
          }
        });
      } else {
        fg.addControl(question.key, new FormControl('', Validators.required));
      }
    });
    this.formInstance = fg;
    return this.formInstance;
  }

  public populateGroup(questions: QuestionGroup): FormGroup {



    return this.formInstance;
  }

}
