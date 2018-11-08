import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contacts';
}

declare global {
  interface Array<T> {
      last(): T;
  }
}

interface Array<T> {
  last(): T;
}

Array.prototype.last = function (this) {
  // code to remove "o"
  return this[ this.length - 1];
};
