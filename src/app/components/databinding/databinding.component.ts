import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { AfterViewInit, Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
  standalone: true,
  imports: [CommonModule, NgFor]
})
export class DatabindingComponent implements AfterViewInit {

  dict: {[key:number]:string} = {1:"Delhi", 2:"Mumbai", 3:"Varanasi", 4:"Kanpur", 5:"Uttarpradesh"};
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

  onCityChange(event: Event): void{
    const key = (event.target as HTMLSelectElement).value;
    const city = this.dict[+key];
    alert(key +"-"+  city);
  }

  changeCourseName() {
    this.courseName = "Angular Course" === this.courseName ? "random course" : "Angular Course";
  }

  showWelcomeMessage() {
    alert("Welcome to the course: " + this.courseName);
  }

  tableClass: string = "secondary";
  changeColor(){
    this.tableClass = this.tableClass === "secondary" ? "secondary-hover" : "secondary";
  }
}
