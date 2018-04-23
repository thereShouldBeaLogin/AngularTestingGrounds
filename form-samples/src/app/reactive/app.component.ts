import { Component } from '@angular/core';
import {FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
      <div>Username: <input type="text" formControlName="username"></div>
      <div>SSN:      <input type="text" formControlName="ssn"></div>
      <ui formArrayName="pretty message">
        <li *ngFor="let e of formModel.get('myPrettyField').controls; let i =index">
          <input [formControlName]="i">
        </li>
        <button type="button" (click)="addField()">Add pretty field</button>
      </ui>
      <div formGroupName="passwordsGroup">
        <div>Password:        <input type="password" formControlName="password"></div>
        <div>Confirm password: <input type="password" formControlName="pconfirm"></div>
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      username: new FormControl(''),
      ssn: new FormControl(''),
      myPrettyField: new FormArray([new FormControl()]),
      passwordsGroup: new FormGroup({
        password: new FormControl(''),
        pconfirm: new FormControl('')
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  addField() {
    this.formModel.get('myPrettyField').push(new FormControl());
  }

}
