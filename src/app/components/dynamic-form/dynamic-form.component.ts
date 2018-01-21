import { Component, OnInit } from '@angular/core';
import { QuestionBuilderService } from '../../services/question-builder.service';
import { QuestionGroup, TextQuestion, CheckboxQuestion } from '../../shared/models/index';
import { BaseQuestion } from '../../shared/models/base-question';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionBuilderService]
})
export class DynamicFormComponent implements OnInit {

  officerjson = {
    'name': 'Saaraketha Officer UI',
    'version': '0.7.0',
    'tenantID': '001',
    'stages': [
      {
        'name': 'Sample Stage',
        'stageId': '00101',
        'sections': [
          {
            'name': 'Section 01',
            'key': 'section01',
            'fields': {
              'booleanField': {
                'label': 'Boolean Field',
                'controlType': 'checkbox',
                'required': true,
                'order': 0
              },
              'floatField': {
                'label': 'Float Field',
                'controlType': 'floatNumber',
                'required': true,
                'order': 1
              },
              'integerField': {
                'label': 'Integer Field',
                'controlType': 'integerNumber',
                'required': true,
                'order': 2
              },
              'dateTimeField': {
                'label': 'Date Time Field',
                'controlType': 'datetime',
                'required': true,
                'order': 3
              },
              'photoField': {
                'label': 'Photo Field',
                'controlType': 'photo',
                'required': true,
                'order': 4
              },
              'textField': {
                'label': 'Text Field',
                'controlType': 'text',
                'required': true,
                'order': 5
              },
              'artifactField': {
                'label': 'Artifact Field',
                'controlType': 'artifact',
                'required': true,
                'order': 6
              },
              'listField': {
                'label': 'List Field',
                'controlType': 'list',
                'required': true,
                'order': 7
              },
              'groupField': {
                'label': 'Group',
                'controlType': 'group',
                'order': 8,
                'items': {
                  'booleanField2': {
                    'label': 'Boolean Field 2',
                    'controlType': 'checkbox',
                    'required': true,
                    'order': 0
                  },
                  'floatField2': {
                    'label': 'Float Field 2',
                    'controlType': 'floatNumber',
                    'required': true,
                    'order': 1
                  }
                }
              },
              'cascadingCheckboxField': {
                'label': 'Cascading Checkbox Field',
                'controlType': 'checkbox',
                'order': 9,
                'cascade': {
                  'true': {
                    'booleanField3': {
                      'label': 'Boolean Field 3',
                      'controlType': 'checkbox',
                      'required': true,
                      'order': 0
                    },
                    'floatField3': {
                      'label': 'Float Field 3',
                      'controlType': 'floatNumber',
                      'required': true,
                      'order': 1
                    }
                  },
                  'false': {
                    'booleanField4': {
                      'label': 'Boolean Field 4',
                      'controlType': 'checkbox',
                      'required': true,
                      'order': 0
                    },
                    'floatField4': {
                      'label': 'Float Field 4',
                      'controlType': 'floatNumber',
                      'required': true,
                      'order': 1
                    }
                  }
                }
              }
            }
          }
        ]
      }
    ]
  };

  constructor(private qbs: QuestionBuilderService) { }

  ngOnInit() {
    // console.log(this.officerjson);
    this.qbs.build(this.officerjson.stages[0]);
  }

}
