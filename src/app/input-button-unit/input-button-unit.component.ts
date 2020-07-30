import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title= 'Hello World';
  constructor() {
    console.log('in constuctor');
    this.title= 'Hello World';
    console.log(this.title);
   }

  ngOnInit(): void {
    this.title = 'Angular CLI Rules';
    this.changeTitle('My First Angular App');
  }
  changeTitle(newTitle: string)
  {
    this.title = newTitle;
    console.log(this.title);
  }

}
