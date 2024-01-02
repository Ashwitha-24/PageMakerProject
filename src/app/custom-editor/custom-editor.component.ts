import { Component } from '@angular/core';

@Component({
  selector: 'custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.scss']
})
export class CustomEditorComponent {

  enableEditor: boolean = false;
  defaultFontSize: number = 45;
  defaultLineHeight: number = 0.9;
}
