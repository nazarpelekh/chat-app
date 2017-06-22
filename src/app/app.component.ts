import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue"></app-lifecycle> 
    <p>{{test}}</p>
    <button (click)="delete = true">Click To Delete</button>
    <button (click)="test = 'Changed Value'">Click To Change Content</button>
    <button (click)="boundValue = 2000">Click To Change Binding</button>
  `,
})
export class AppComponent {
  title = 'I change it!';
  delete = false;
  test = 'Starting Value';
  boundValue = 1000;

}
