import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { BaseQuestion } from '../../shared/models/base-question';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  @Input() question: BaseQuestion<any>;
  @Input() form: FormGroup;

  formGroup: AbstractControl;
  
  constructor() { }

  ngOnInit() {
    this.formGroup = this.form.get(this.question.key);
    console.log(this.form.get(this.question.key));
  }

}
