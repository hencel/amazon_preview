import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-catalog',
  templateUrl: './links-catalog.component.html',
  styleUrls: ['./links-catalog.component.scss']
})
export class LinksCatalogComponent implements OnInit {

  currentElement: string = 'links-catalog';

  constructor() { }
  
  ngOnInit(): void {
  }

}
