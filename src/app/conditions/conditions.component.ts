import { ReactiveFormComponent } from './../reactive-form/reactive-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})

export class ConditionsComponent implements OnInit {
  marked = false;
  theCheckbox = false;

  constructor(private router: Router, private loginservice : LoginService) { }

  toggleVisibility(e){
    this.marked= e.target.checked;
  }


  validate() {
 
    this.loginservice.login()
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/checkbox']);
          });

  
  
  }

  return() {

    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
