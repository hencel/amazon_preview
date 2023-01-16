import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { mainAddress, login } from '../config';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../service/project.service';
import { LoginToken, LoginObject } from '../model/interfaces';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  arrowRightIcon = faArrowRight;
  email: string = '';
  password: string = '';

  authWrong: boolean = false;

  constructor(private router: Router, private http: HttpClient, private service: ProjectService) { }

  ngOnInit(): void {
  }

  tempSubmit() {
    this.router.navigate(['main-form']);
  }


  makeLogin() {
    const url: string = mainAddress + login;
    const data: LoginObject = {"username": this.email, "password": this.password};
    this.service.postAuth(url, data).subscribe({
      next: (response: LoginToken) => {
        if(response.hasOwnProperty('token')) {
          this.service.saveLocalStorage('amz_token', response.token);
        } else {
          this.authWrong = true;
        }
      },
      error: (error) => {console.log(error)},
    })
  }
}
