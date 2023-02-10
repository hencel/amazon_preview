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
  requestProgress: boolean = false;

  constructor(private router: Router, private http: HttpClient, private service: ProjectService) { }

  ngOnInit(): void {
    
  }

  tempSubmit() {
    this.router.navigate(['main-form']);
  }


  makeLogin() {
    const url: string = mainAddress + login;
    const data: LoginObject = {"email": this.email, "password": this.password};
    this.requestProgress = true;
    this.service.postAuth(url, data).subscribe({
      next: (response: LoginToken) => {
        this.requestProgress = false;
        if(response.hasOwnProperty('token')) {
          this.service.saveLocalStorage('amz_token', response.token);
          this.router.navigate(['main-form']);
        } else {
          this.authWrong = true;
        }
      },
      error: (error) => {
        this.requestProgress = false;
        this.authWrong = true;
      },
    })
  }


}
