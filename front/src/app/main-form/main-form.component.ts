import { Component, OnInit, NgModule } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SpecItem } from '../model/interfaces';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  arrowRightIcon = faArrowRight;

  specDataArray: SpecItem[] = [{
    title: '',
    value: ''
  }];

  constructor() { }

  ngOnInit(): void {
  }
  addRow() {
    this.specDataArray.push( {title: '', value: ''});
  }

  removeRow(itemId: number) {
    console.log(itemId);
    this.specDataArray.splice(itemId, 1);
  }
  submitForm() {
    console.log(this.specDataArray)
  }
  onKey(event: any) {
    console.log(event.target.value)
  }
}
