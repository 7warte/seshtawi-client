import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  @ViewChild('main_title') main_title: ElementRef | undefined;
  @ViewChild('subtitle_1') subtitle_1: ElementRef | undefined;
  @ViewChild('body_1') body_1: ElementRef | undefined;
  @ViewChild('subtitle_2') subtitle_2: ElementRef | undefined;
  @ViewChild('body_2') body_2: ElementRef | undefined;
  @ViewChild('caption') caption: ElementRef | undefined;
  fileName = '';
  missingFields: any[] = [];
  formData_CDN = new FormData();
  formData_backend = new FormData()
  pictures: any[] = []
  constructor(private http: HttpClient) { }
  validationObject: any = {
    images: {
      "1_A": false,
      "1_B": false,
      "2_B": false,
      "3_B": false,
      "1_C": false
    },
    texts: {
      "main_title": false,
      "subtitle_1": false,
      "body_1": false,
      "subtitle_2": false,
      "body_2": false,
      "caption": false
    }
  }
  formValidation() {
    this.missingFields.length = 0;
    // this functin should return an object containing 2 properties:
    // 1 : a boolean that should be true if all the fields are filled
    // 2 : the missing field in case the property above is FALSE (or NULL in case that is true)
    //check if all images are filled in
    const imagesFilled = Object
      .values(this.validationObject.images)
      .every(value => value === true);
    //check if all texts are filled in
    const textsFilled = Object
      .values(this.validationObject.texts)
      .every(value => value === true);
    if (textsFilled === true && imagesFilled) {
      // this.sendForm()
    }
    else {
      this.sendForm()
      let falseProperties = []
      let texts = this.validationObject.texts
      let images = this.validationObject.images
      for (const key in this.validationObject.texts) {
        if (texts.hasOwnProperty(key) && texts[key] === false) {
          falseProperties.push(key)
        }
      }
      for (const key in images) {
        if (images.hasOwnProperty(key) && images[key] === false) {
          falseProperties.push(key)
        }
      }
      this.missingFields = falseProperties;
    }
  }
  onFileSelected(event: any, inputName: any) {
    // validation 
    this.validationObject.images[inputName] = true;
    const file: any = event.target.files[0];
    this.pictures.push(file);
    console.log(this.pictures);
  }
  onTextInput(textAreaRef: any) {
    //validation
    this.validationObject.texts[textAreaRef.name] = true;
  }
  sendForm() {

   var  images:any= 
      {
          "image_name": "image1.jpg",
          "blog_id": 1 // Assuming the ID of the article this image belongs to
      }

      // More images associated with the same article or other articles...
  





    this.formData_backend.append('main_title', this.main_title?.nativeElement.value);
    this.formData_backend.append('subtitle_1', this.subtitle_1?.nativeElement.value);
    this.formData_backend.append('body_1', this.body_1?.nativeElement.value);
    this.formData_backend.append('subtitle_2', this.subtitle_2?.nativeElement.value);
    this.formData_backend.append('caption', this.caption?.nativeElement.value);
this.formData_backend.append('images',images)

  
  
    this.pictures.forEach((pic) => {
      this.formData_CDN.append('photos', pic);
    })
    // 2 different requestes are made here:
    // 1 : CDN to save images
    //  2 : Backend server to save article in DB
    console.log(this.formData_CDN);
    console.log(this.formData_backend);
    // CDN
    // const upload = this.http.post("http://localhost:4400/new-article", this.formData_CDN, {
    // });
    // upload.subscribe(response => {
    //   console.log(response);

    
    // });

    function formDataToObject(formData:any) {
      let object:any = {};
      for (let [key, value] of formData.entries()) {
        object[key] = value;
      }
      return object;
    }


    console.warn(formDataToObject(this.formData_backend));
    


    const saveArticle = this.http.post("http://localhost:4300/new-article", formDataToObject(this.formData_backend), {
    });
    saveArticle.subscribe(response => {
      console.log(response);
    });
  }
}
