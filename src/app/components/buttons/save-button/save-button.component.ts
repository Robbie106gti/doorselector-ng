import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nc-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent {
  @Output() add = new EventEmitter<boolean>();

  constructor() { }

  click() {
    this.add.emit(true);
  }

}
