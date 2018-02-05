import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionBuilderService } from '../../services/question-builder.service';
import { QuestionGroup, TextQuestion, CheckboxQuestion } from '../../shared/models/index';
import { BaseQuestion } from '../../shared/models/base-question';
import { QuestionControlService } from '../../services/question-control.service';
import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService, QuestionBuilderService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionGroup;
  form: FormGroup;

  constructor(
    private qcs: QuestionControlService,
    private qbs: QuestionBuilderService
  ) { }

  ngOnInit() {
    this.qcs.toFormGroup(this.questions);
    this.form = this.qcs.formInstance;
    // this.form.valueChanges.subscribe(val => {
    //   console.log(val);
    // });

    // setInterval(() => {
    //   console.log('rebuilding');
    //   console.log(this.form.value);
    //   // this.form = this.qcs.toFormGroup(this.questions);
    //   // this.form.reset();
    //   this.form.setValue(this.qcs.toFormGroup(this.questions).value);
    // }, 10000);
  }

  onSubmit() {
    console.log('event received');
    
    // console.log(this.form.value);
    // this.form.addControl('key', new FormControl());
    // this.questions.questions.push(new CheckboxQuestion({
    //   key: 'key',
    //   label: 'data.label',
    //   required: true,
    //   order: 54
    // }));
  }

}
