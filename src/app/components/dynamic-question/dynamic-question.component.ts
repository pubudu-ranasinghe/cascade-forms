import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseQuestion } from '../../shared/models/base-question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {
  @Input() question: BaseQuestion<any>;
  @Input() form: FormGroup;

  @Output() valueChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  cascadeValueChanged(event) {
    console.log('value changed in dynamic question component');
    console.log(event);
    
    this.valueChanged.emit(event);
  }

}
