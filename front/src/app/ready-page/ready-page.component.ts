import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ready-page',
  templateUrl: './ready-page.component.html',
  styleUrls: ['./ready-page.component.scss']
})
export class ReadyPageComponent implements OnInit {

  data: any;
  file: any;
  files: any[] = [];
  constructor(private service: ProjectService, private sanitizer: DomSanitizer) {
    this.data = this.service.data;
  }

  ngOnInit(): void {
    console.log(this.data);
    let url = URL.createObjectURL(this.data.fileMain);

    this.file = this.sanitizer.bypassSecurityTrustUrl(url);
    
  }

}
