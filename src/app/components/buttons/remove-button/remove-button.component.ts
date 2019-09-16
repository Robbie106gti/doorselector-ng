import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nc-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.scss']
})
export class RemoveButtonComponent {
  @Output() remove = new EventEmitter<boolean>();

  constructor() { }

  click() {
    this.remove.emit(true);
  }

}
