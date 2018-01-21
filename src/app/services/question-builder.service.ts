import { Injectable } from '@angular/core';
import { BaseQuestion } from '../shared/models/base-question';
import {
  CheckboxQuestion,
  NumberQuestion,
  DatetimeQuestion,
  PhotoQuestion,
  TextQuestion,
  ArtifactQuestion,
  ListQuestion,
  QuestionGroup
} from '../shared/models/index';

@Injectable()
export class QuestionBuilderService {

  constructor() { }

  private makeQuestion(data: any, key: string): BaseQuestion<any> | QuestionGroup {
    const controlType = data.controlType;
    if (controlType === 'checkbox') {
      return new CheckboxQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'floatNumber') {
      return new NumberQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'integerNumber') {
      return new NumberQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'datetime') {
      return new DatetimeQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'photo') {
      return new PhotoQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'text') {
      return new TextQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'artifact') {
      return new ArtifactQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'list') {
      return new ListQuestion({
        key: key,
        label: data.label,
        required: data.required,
        order: data.order
      });
    } else if (controlType === 'group') {
      return new QuestionGroup({});
    } else { return null; }
  }

  build(data: any) {
    // data.sections.forEach(section => {
    //   const sectionFields: BaseQuestion<any>[] = [];
    //   Object.keys(section.fields).forEach(fieldKey => {
    //     sectionfthis.makeQuestion(section.fields[fieldKey], fieldKey);
    //   });
    // });
  }

}
