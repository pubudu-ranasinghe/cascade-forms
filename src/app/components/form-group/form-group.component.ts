import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() parentKey: string;

  @Output() valueChanged = new EventEmitter<any>();

  formGroup: AbstractControl;
  
  constructor() { }

  ngOnInit() {
    
    this.formGroup = this.form.get(this.parentKey);
  }

  notifyParent(event) {
    console.log('value change event captured in group');
    this.valueChanged.emit(event);
  }

}
