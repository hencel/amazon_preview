import { Component, OnInit } from '@angular/core';
import { faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  currentElement: string = 'main-form';
  arrowRightIcon = faArrowRight;
  plusIcon = faPlus;
  minusIcon = faMinus;
  images: any = [];

  myForm: FormGroup;

  constructor(private builder: FormBuilder, private router: Router, private service: ProjectService) {
    this.myForm = this.builder.group({
      mainFormName: [''],
      mainFormTitle: [''],
      specDataArray: this.builder.array([
        this.initSpec(),
      ]),
      bulletPointsArray: this.builder.array([
        this.initBullet(0),
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
  initBullet(counter: number): FormGroup {
    return this.builder.group({
      count: [counter],
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
        const counter = this.myForm.controls.bulletPointsArray.value.length;
        control.push(this.initBullet(counter));
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
    
    if(target == 'bulletPointsArray') {
      for (const { index, value } of control.value.map((value:any, index:any) => ({ index, value }))) {
        value.count = index;
      }
    }
    
  }

  uploadMainFile(event: Event, target: string): void {
    const file = (event.target as HTMLInputElement)?.files?.[0] as File;
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
    this.router.navigate(['ready-page']);

    this.service.passReadyData(this.myForm.value)
  }
}
