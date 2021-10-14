import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
    <h1 class='textColor'>Hello world</h1>
    <h1 class='textColor textSize'>Hello world</h1>
    <h1 [class]='myStyle'>Hello world</h1>
    <h1 [class]='myStyles'>Hello world</h1>
    <h1 [class.textColor]='required'>Hello world</h1>
    <h1 [ngClass]='groupStyles'>Hello world</h1>
  `,
  styles: [`
    .textSize{
      font-size:60px;
    }
    .textColor{
      color:blue;
    }
  `]
})
export class ClassbindingComponent implements OnInit {
  public myStyle = 'textColor'
  public myStyles = 'textColor textSize'
  public required= true
  public groupStyles = {
    'textColor': this.required,
    'textSize': this.required
  }
  constructor() { }

  ngOnInit(): void {
  }

}
