import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
    <h1>Hello World</h1>
    <h1 [style.color]="'blue'">Hello World</h1>
    <h1 [style.color]="myStyles">Hello World</h1>
  `,
  styles: [
  ]
})
export class StylebindingComponent implements OnInit {
  public myStyles= 'red'
  constructor() { }

  ngOnInit(): void {
  }

}
