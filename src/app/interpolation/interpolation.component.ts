import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
  <div>This is {{name}}</div>
  <div>{{"Hellooo" + user}}</div>
  <div>The length of {{user + " "+user.length}}</div>
  <div>{{user.toUpperCase()}}</div>
  <div>{{userName()}}</div>
  <div>This is my link {{myUrl}}</div>
  `,
  styles: [`
  div{
    color: red;
    font-size:40px;
    text-align:center;
  }
`]
})
export class InterpolationComponent implements OnInit {
  public name='beautiful footer'
  public user= 'sundar'
  public myUrl = window.location.href
  constructor() { }

  ngOnInit(): void {
  }
  userName(){
    return 'Hello Mr ' + this.user
  }

}
