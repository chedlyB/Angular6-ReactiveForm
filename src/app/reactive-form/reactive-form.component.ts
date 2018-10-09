import { Custom } from './custom';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
public userForm : FormGroup;
submitted = false ;
  constructor(private router: Router, fb: FormBuilder,private loginservice : LoginService) { 

    this.userForm = fb.group({
      name: [null,Validators.required],
      email: [null,Validators.compose([Validators.required,Validators.email]) ],
      password : [null,Validators.compose([Validators.required,Validators.minLength(6) ])],


    })
  
  }

  get f() { return this.userForm.controls; }

  
  send() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }

    alert('Bravo !! :-)')
   
    this.router.navigate(['Condition']);
    console.log(this.userForm.value) ;
    this.loginservice.v = this.userForm.value ; 

  }
reset(){ 

  this.userForm.reset();
}



  ngOnInit() {
  
  }

}
