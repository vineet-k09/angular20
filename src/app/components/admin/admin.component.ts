import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  firstName: string = "chetan";
  lastName: string = "kumar";
  age: number = 25;
  rollno: number = 12;
}