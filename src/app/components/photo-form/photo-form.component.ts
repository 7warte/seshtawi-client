import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-photo-form',
  standalone: false,
  templateUrl: './photo-form.component.html',
  styleUrl: './photo-form.component.scss'
})
export class PhotoFormComponent {

  photoForm :any = new FormGroup({
   photo:new FormControl('photo')
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



    // validation
    // this.validationObject.images[inputName] = true;
    // const file: any = event.target.files[0];
    // console.log(inputName);

    // let media = {file:file, position:inputName }
    // this.pictures.push(media);
    // console.log(this.pictures);
  }

}
