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
  QuestionGroup,
  CascadingCheckboxQuestion
} from '../shared/models/index';

@Injectable()
export class QuestionBuilderService {

  constructor() { }

  private makeQuestion(data: any, key: string): BaseQuestion<any> | QuestionGroup {
    const controlType = data.controlType;
    if (controlType === 'checkbox') {
      if (data.cascade) {
        const cascadeGroups = [];
        Object.keys(data.cascade).forEach(cascadeGroupKey => {
          const questionArray: BaseQuestion<any>[] = [];
          Object.keys(data.cascade[cascadeGroupKey])
            .forEach(itemKey => {
              questionArray.push(this.makeQuestion(data.cascade[cascadeGroupKey][itemKey], itemKey));
            });
          const cascadeGroup = new QuestionGroup({
            questions: questionArray,
            key: cascadeGroupKey
          });
          cascadeGroups.push({
            active: false,
            questions: cascadeGroup
          });
        });

        return new CascadingCheckboxQuestion({
          cascadeGroups: cascadeGroups,
          key: key,
          label: data.label,
          required: data.required,
          order: data.order
        });
      }
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
      const questionArray: BaseQuestion<any>[] = [];
      Object.keys(data.items).forEach(item => {
        questionArray.push(this.makeQuestion(data.items[item], item));
      });
      return new QuestionGroup({
        questions: questionArray,
        key: data.key
      });
    } else { return null; }
  }

  build(data: any) {
    const masterQArray: BaseQuestion<any>[] = [];
    data.sections.forEach(section => {
      const sectionFields: BaseQuestion<any>[] = [];
      Object.keys(section.fields).forEach(fieldKey => {
        sectionFields
          .push(this.makeQuestion(section.fields[fieldKey], fieldKey));
      });
      const sectionGroup: QuestionGroup = new QuestionGroup({
        questions: sectionFields,
        key: section.key
      });
      masterQArray.push(sectionGroup);
    });
    const masterGroup: QuestionGroup = new QuestionGroup({
      questions: masterQArray,
      key: data.stageId
    });

    console.log(masterGroup);
  }

}
