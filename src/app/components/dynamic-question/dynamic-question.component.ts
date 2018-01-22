import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
