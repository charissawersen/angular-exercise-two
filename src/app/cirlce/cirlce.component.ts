import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-cirlce',
  templateUrl: './cirlce.component.html',
  styleUrls: ['./cirlce.component.css']
})
export class CirlceComponent implements OnInit {
public input: number = 0;
public diameter: number;
public isCircle: boolean = false; 
  constructor() {}

  // setDiameter():void {
  //    this.diameter = this.input;
  // }


  ngOnInit(): void {
  }

}
