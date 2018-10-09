import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  marked = false;
  theCheckbox = false;

  constructor(private router: Router) { }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }


  validate() {


  }

  return() {

    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
