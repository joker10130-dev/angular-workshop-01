import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {User} from './../models/user';

type Users = User[]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  show = true;
  users: Users = [];
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

  get f(){
    return this.loginForm.controls;
  }

  onSave(): void {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    const fullName = `${this.f.firstName.value} ${this.f.lastName.value}`;
    const user = new User(fullName, false);
    this.users.push(user);
    this.loginForm.reset();
    this.submitted = false;
  }

  onClickChange(index: number): void {
    this.users[index].status = !this.users[index].status;
    this.strikedCount = this.users.filter((u) => u.status).length;
  }
  
}