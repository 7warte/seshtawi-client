import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {


  blog_id: number = 1;


  imagesPreview:any=[];

  test:any

  @ViewChild('main_title') main_title: ElementRef | undefined;
  @ViewChild('subtitle_1') subtitle_1: ElementRef | undefined;
  @ViewChild('body_1') body_1: ElementRef | undefined;
  @ViewChild('subtitle_2') subtitle_2: ElementRef | undefined;
  @ViewChild('body_2') body_2: ElementRef | undefined;
  @ViewChild('caption') caption: ElementRef | undefined;
  @ViewChild('tags') tags: ElementRef | undefined;


  fileName = '';
  missingFields: any[] = [];
  formData_CDN = new FormData();
  formData_backend = new FormData()
  pictures: any[] = []
  pictures_info:any[]=[];
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
      "caption": false,
      "tags": false
    }
  }
  formValidation() {

    this.sendForm()  


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
      this.sendForm()  
    }
    else {

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
      this.missingFields.length = 0;
    }
  }
  onFileSelected(event: any, inputName: any) {


    console.log(event.target.files);

    //storing images preview
    



      const imageFile = event.target.files[0];

      const reader = new FileReader()
      reader.onload = (e)=>{  this.imagesPreview[inputName] = reader.result  }

      reader.readAsDataURL(imageFile)


    // validation 
    this.validationObject.images[inputName] = true;
    const file: any = event.target.files[0];


    console.log(inputName);
    

    let media = {file:file, position:inputName }

    this.pictures.push(media);


    console.log(this.pictures);
  }




  onTextInput(textAreaRef: any) {
    //validation
    this.validationObject.texts[textAreaRef.name] = true;
  }
  sendForm() {


    console.log('fired');



    // More images associated with the same article or other articles...




    //image names extraction

    // this.formData_CDN.forEach((image: any) => {
    //   console.log(image.name, '<--');

    //   images.push({ name: image.name, blog_id: this.blog_id })


    // })


    //tags extaction


    console.log(this.tags?.nativeElement.value, '<---------------');


    let tags: any[] = this.tags?.nativeElement.value.split(' ')

console.log(this.pictures);


let images:any[]=[];

this.pictures.forEach((image:any)=>{

  images.push({name:image.file.name,position:image.position})

});




    this.formData_backend.append('main_title', this.main_title?.nativeElement.value);
    this.formData_backend.append('subtitle_1', this.subtitle_1?.nativeElement.value);
    this.formData_backend.append('body_1', this.body_1?.nativeElement.value);
    this.formData_backend.append('subtitle_2', this.subtitle_2?.nativeElement.value);
    this.formData_backend.append('body_2', this.body_2?.nativeElement.value);
    this.formData_backend.append('caption', this.caption?.nativeElement.value);
    this.formData_backend.append('tags', JSON.stringify(tags))
    this.formData_backend.append('images', JSON.stringify(images))




    // 2 different requestes are made here:
    //  1 : CDN to save images
    //  2 : Backend server to save article in DB

    // CDN


    function formDataToObject(formData: any) {
      let object: any = {};
      for (let [key, value] of formData.entries()) {
        object[key] = value;
      }
      return object;
    }



 let test=    [
      new Date(),
      'main_title',
      'subtitle_1',
      'body_1',
      'subtitle_2',
      'body_2',
      {},
      {},
      {}
  ]
     





    // const saveArticle = this.http.post(`${environment.apiUrl_backend_prod}new-article`, formDataToObject(this.formData_backend), {
      const saveArticle = this.http.post(`${environment.apiUrl_backend_prod}new-article`, test, {
    });
    saveArticle.subscribe((response_backend: any) => {





      let images: any = [];  //images names stored in array




      this.pictures.forEach((media) => {
  
      media.parent_id = response_backend.id

    //  images.push({name:media.file.name, position:media.position})

        this.formData_CDN.append('photos', media.file);
  
  
      })





      // this.formData_CDN.append('parent_id',response_backend.id)
  

      console.log(this.formData_CDN);
      





      // the newly created article is return in case of success:



      // var formData_CDN_identified = new FormData()  // once the article id is returned a new formData is created with article ID's


      // this.formData_CDN.forEach((file: any) => {



      //   file.parent_id = response_backend.id
      //   console.warn(file);
        
      //   console.log(file,'<---file');
      //   console.log(response_backend);
      //   console.log('---------------');
        
        



      //   formData_CDN_identified.append('photos', file);
      //   // article ID is associated with each of


      //   // console.warn(img);
      //   // img['blog_id'] = response_backend.id


      // })

      // formData_CDN_identified.append('article_id', response_backend.id);





      

      const headers = {
        parent_id:response_backend.id
      }



      const upload = this.http.post("http://localhost:4400/new-article", this.formData_CDN,{
        headers:headers
      });
      upload
      .pipe(map((response_CDN:any)=>{

     location.reload()

      }))
      .subscribe(response_CDN => {
        console.log(response_CDN);



      });



    });
  }
}
