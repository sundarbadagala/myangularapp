import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydata',
  template: `
    <input [(ngModel)]=data type='text' placeholder='enter your name'/> 
    {{data}}
  `,
  styles: [
  ]
})
export class TwowaydataComponent implements OnInit {
  public data=''

  constructor() { }

  ngOnInit(): void {
  }

}
