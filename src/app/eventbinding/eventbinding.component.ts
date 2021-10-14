import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    
      <button (click)='clickHandler()'>Click Here</button>
      <button (click)='showHandler()'>Show</button>
      <h1>{{greetings}}</h1>
    
  `,
  styles: [
  ]
})
export class EventbindingComponent implements OnInit {
  public greetings =''
  constructor() { }

  ngOnInit(): void {
  }
  clickHandler(){
    alert('hello')
  }
  showHandler(){
    this.greetings = 'Hi world, How are you?'
  }
}
