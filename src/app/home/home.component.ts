import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loggedIn;
  public user;
  public noMatch = false;

  public loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(public _translateService: TranslateService, private fb: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUser()
      .subscribe(
        (value) =>  this.user = value,
        (error) => console.log(error),
        () => console.log('completed'));

    this.loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (this.loggedIn == null) {
        this.loggedIn = false;
      }
    localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
    }

  logIn() {
          if (this.user.username == this.loginForm.value.username &&  this.user.password == this.loginForm.value.password) {
            this.loggedIn = true;
            console.log("dela");
            localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
          } else {
            this.noMatch = true;
            console.log("ooops")
          }
      }

  logOut() {
          this.loggedIn = false;
          localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
      }


  }
