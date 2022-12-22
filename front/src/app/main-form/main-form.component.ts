import { Component, OnInit, NgModule } from '@angular/core';
import { faArrowRight, faPlus, faMinus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
  checkIcon = faCheckCircle;

  mainFileText = 'Wgraj plik (970px szerokości) <img src="assets/images/icon-image.svg" />';

  filesSecondary: BulletPoint[] = [{
    text: ''
  }]

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
      fileMain: [null]
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
      default:
        break;
    }
  }

  removeDataRow(target: string, i: number): void {
    const control = <FormArray>this.myForm.controls[target];
    control.removeAt(i);
  }

  uploadFile(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    this.myForm.patchValue({
      fileMain: file
    });
    this.myForm.get('fileMain')?.setValue(file); //updateValueAndValidity()
  }

  // uploadFile(event: Event) {
  //   const element = event.currentTarget as HTMLInputElement;
  //   let fileList: FileList | null = element.files;
  //   if (fileList) {
  //     console.log(fileList);
  //     this.customFile = fileList[0].name;
  //     console.log(this.customFile);
  //   }
  // }

  // onFileSelected(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     this.customFile = target.files[0].name;
  //   }
  // }
//   onFileSelected(event: Event) {
//     const file = (event.target as HTMLInputElement)?.files?.[0];

//     if (file) {
//       console.log((event.target as Element).id);
//       this.fileMain = file.name;
//       // const formData = new FormData();
//       // formData.append("thumbnail", file);
//       // const upload$ = this.http.post("/api/thumbnail-upload", formData);
//       // upload$.subscribe();
//     }

    
// }

  submitForm() {
    let formData: any = new FormData();
    formData.append('mainFormName', this.myForm.get('mainFormName')?.value);
    formData.append('mainFormTitle', this.myForm.get('mainFormTitle')?.value);
    // formData.append('avatar', this.form.get('avatar').value);

    console.log(this.myForm);
  }
}
