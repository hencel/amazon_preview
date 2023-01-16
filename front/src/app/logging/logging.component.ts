import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { mainAddress, login } from '../config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  arrowRightIcon = faArrowRight;
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  tempSubmit() {
    this.router.navigate(['main-form']);
  }


  makeLogin() {
    const url = mainAddress + login;
    const data = {"username": this.email, "password": this.password};
    this.http
      .post(url,data)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => {console.log(error)},
      });
  }
}
