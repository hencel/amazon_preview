import { Component, OnInit, NgModule } from '@angular/core';
import { faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { SpecItem, BulletPoint } from '../model/interfaces';
// import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  arrowRightIcon = faArrowRight;
  plusIcon = faPlus;
  minusIcon = faMinus;
  images: any = [];

  myForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.myForm = this.builder.group({
      mainFormName: [''],
      mainFormTitle: [''],
      specDataArray: this.builder.array([
        this.initSpec(),
      ]),
      bulletPointsArray: this.builder.array([
        this.initBullet(),
      ]),
      fileMain: [null],
      filesSecondary: this.builder.array([
        this.initUploadFiles()
      ])
    });
  }

  ngOnInit(): void {
    
  }
  initSpec(): FormGroup {
    return this.builder.group({
      title: [''],
      value: ['']
    });
  }
  initBullet(): FormGroup {
    return this.builder.group({
      text: ['']
    })
  }
  initUploadFiles(): FormGroup {
    this.images.push(null);
    return this.builder.group({
      file: [null]
    })
  }
  
  getDataControls(target: string) {
    return (this.myForm.get(target) as FormArray).controls;
  }

  addDataRow(target: string): void {
    const control = <FormArray>this.myForm.controls[target];
    switch (target) {
      case 'specDataArray':
        control.push(this.initSpec());
        break;
      case 'bulletPointsArray':
        control.push(this.initBullet());
        break;
      case 'filesSecondary':
        control.push(this.initUploadFiles());
        break;
      default:
        break;
    }
  }

  removeDataRow(target: string, i: number): void {
    const control = <FormArray>this.myForm.controls[target];
    control.removeAt(i);
  }

  uploadMainFile(event: Event, target: string): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.myForm.get(target)?.setValue(file);
    this.myForm.patchValue({
      target: file
    });
    
  }

  onUploadFiles(event: Event, index: number): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    this.images.splice(index, 1, file);
  }

  submitForm() {
    let formData: any = new FormData();
    formData.append('mainFormName', this.myForm.get('mainFormName')?.value);
    formData.append('mainFormTitle', this.myForm.get('mainFormTitle')?.value);
    // formData.append('avatar', this.form.get('avatar').value);

  }
}
