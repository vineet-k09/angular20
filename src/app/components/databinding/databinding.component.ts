import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements AfterViewInit {
  
  rows!: NodeListOf<HTMLTableRowElement>;
  ngAfterViewInit(): void {
    this.rows = document.querySelectorAll('tr')
    this.rows.forEach((tr) => {
      tr.classList.add(this.centerClassName);
    });
  }
  courseName: string = "random course"
  productID: number = 123
  maxLength: number = 2;

  inputType: string = "radio"

  myClassName: string = "myColor"
  centerClassName: string = "center"

  constructor(){

  }

  showWelcomeMessage() {
    alert("Welcome to the course: " + this.courseName);
  }

  tableClass: string = "secondary";
  changeColor(){
    this.tableClass = this.tableClass === "secondary" ? "secondary-hover" : "secondary";
  }
}
