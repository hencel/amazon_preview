import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide-post',
  templateUrl: './guide-post.component.html',
  styleUrls: ['./guide-post.component.scss']
})
export class GuidePostComponent implements OnInit {

  @Input() status = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
