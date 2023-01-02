import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit {

  arrowRightIcon = faArrowRight
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tempSubmit() {
    this.router.navigate(['main-form']);
  }
}
