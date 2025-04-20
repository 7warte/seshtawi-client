import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-photo-form',
  standalone: false,
  templateUrl: './photo-form.component.html',
  styleUrl: './photo-form.component.scss'
})
export class PhotoFormComponent {


  constructor(private http:HttpClient){

  }



  photoForm :any = new FormGroup({
   title:new FormControl('title'),
   description:new FormControl('description'),
   file:new FormControl()

  });

  imagePreview:any={};
  onFileSelected(event: any, inputName: any) {

    // let supportedFormats =
    // ['image/apng','image/avif','image/gif','image/jpeg', 'image/png','image/svg+xml','image/webp']



    console.log(this.photoForm);
    console.log(event.target.files);
    //storing images preview

      const imageFile:any = event.target.files[0];

      console.log(imageFile);
      if(!imageFile.type.includes('image')){

         return console.log('not accepted format');
      }


      const reader = new FileReader()
      reader.onload = (e)=>{  this.imagePreview.result = reader.result  }
      reader.readAsDataURL(imageFile)
      this.imagePreview.file = imageFile
      console.log(this.imagePreview);



      this.photoForm.controls['file'].setValue(imageFile);
      console.log(this.photoForm);



    // validation
    // this.validationObject.images[inputName] = true;
    // const file: any = event.target.files[0];
    // console.log(inputName);

    // let media = {file:file, position:inputName }
    // this.pictures.push(media);
    // console.log(this.pictures);
  }


  fillForm(controller:string, value:string){

    this.photoForm.controls[controller].setValue(value);

  }

  submitForm(){



    console.log(this.photoForm.controls['file']);




    let  formData_backend = new FormData();
    formData_backend.append('title', this.photoForm.controls['title'].value);
    formData_backend.append('description', this.photoForm.controls['description'].value);
    formData_backend.append('file', this.photoForm.controls['file'].value);


console.log(formData_backend);



    this.http.post(`${environment.apiUrl_backend}new-photo`,formData_backend).subscribe({
      next: (res:any)=>{
        console.log('next', res);
        return res

      }
,
complete: ()=>{

},

error:(err:any)=> {
  console.log(err);
  return err}


    })


  }

}
