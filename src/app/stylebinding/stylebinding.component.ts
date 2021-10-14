import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
    <h1>Hello World</h1>
    <h1 [style.color]="'blue'">Hello World</h1>
    <h1 [style.color]="myColor">Hello World</h1>
    <h1 [style.color]="required ? 'red' : 'teal' ">Hello World</h1>
    <h1 [ngStyle]="myStyles">Hello World</h1>
  `,
  styles: [
  ]
})
export class StylebindingComponent implements OnInit {
  public myColor= 'red'
  public required = false
  public myStyles = {
    color:'orange',
    fontSize:'30px',
    fontStyle:'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
