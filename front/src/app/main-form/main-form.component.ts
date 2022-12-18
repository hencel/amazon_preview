import { Component, OnInit, NgModule } from '@angular/core';
import { faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { SpecItem, BulletPoint } from '../model/interfaces';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  arrowRightIcon = faArrowRight;
  plusIcon = faPlus;
  minusIcon = faMinus;

  specDataArray: SpecItem[] = [{
    title: '',
    value: ''
  }];

  bulletPointsArray: BulletPoint[] = [{
    text: ''
  }]

  constructor() { }

  ngOnInit(): void {
  }
  addRow() {
    this.specDataArray.push( {title: '', value: ''});
  }

  removeRow(itemId: number) {
    this.specDataArray.splice(itemId, 1);
  }
  submitForm() {
    console.log(this.bulletPointsArray)
  }
  onKey(event: any) {
    console.log(event.target.value)
  }

  addBulletPoint() {
    this.bulletPointsArray.push( {text: ''})
  }
  removeBulletPoint(itemId: number) {
    this.bulletPointsArray.splice(itemId, 1)
  }
}
