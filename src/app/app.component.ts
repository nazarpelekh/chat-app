import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="!deletes"></app-lifecycle> 
    <button (click)="delete = true">Click To Delete</button>
  `,
})
export class AppComponent {
  title = 'I change it!';
  delete = false;

}
