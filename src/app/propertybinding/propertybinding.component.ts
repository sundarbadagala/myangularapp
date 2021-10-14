import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
    <p>
      <input type='text' [id]='user' value='hello world'/><br/> 
      <input type='text' id='{{user}}' value='hello world'/><br/>
      <input type='text' disabled value='hello world'/><br/>
      <input type='text' disabled='isDisabled' value='hello world'/><br/>
      <input type='text' [disabled]='isDisabled' value='hello world'/><br/>
      <input type='text' bind-disabled='isDisabled' value='hello world'/><br/>
    </p>
  `,
  styles: [
  ]
})
export class PropertybindingComponent implements OnInit {
  public user = 'sundar'
  public isDisabled = false
  constructor() { }

  ngOnInit(): void {
  }

}
