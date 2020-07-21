import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // firstName = '';
  // lastName = '';
  show = true;
  users = [];
  strikedCount = 0;
  submitted = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  // inputYourName(event:any): void {
  //   this.firstName = event.target.value;
  // }
  // inputLastname(input: string): void {
  //   this.lastName = input;
  // }

  get f(){
    return this.loginForm.controls;
  }

  onSave(): void {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`;
    this.users.push({name: fullName, status: false});
  }

  onClickChange(index: number): void {
    this.users[index].status = !this.users[index].status;
    this.strikedCount = this.users.filter((u) => u.status).length;
  }

  
  
}
