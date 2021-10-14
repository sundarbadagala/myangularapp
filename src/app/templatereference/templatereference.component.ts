import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  template: `
    <input #msg type='text' placeholder='enter your name'/>
    <button (click)='clckHandler(msg.value)'>Click Here</button>
  `,
  styles: [
  ]
})
export class TemplatereferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clckHandler(message: any){
    alert('hi ' + message + ' how are you?')
  }

}
