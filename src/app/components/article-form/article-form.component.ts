import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],

})
export class ArticleFormComponent {
  blog_id: number = 1;
  imagesPreview:any=[];
  test:any
  @ViewChild('main_title') main_title: ElementRef | any;
  @ViewChild('subtitle_1') subtitle_1: ElementRef | any;
  @ViewChild('body_1') body_1: ElementRef | any;
  @ViewChild('subtitle_2') subtitle_2: ElementRef | any;
  @ViewChild('body_2') body_2: ElementRef | any;
  @ViewChild('caption') caption: ElementRef | any;
  @ViewChild('tags') tags: ElementRef | any;
  fileName = '';
  missingFields: any[] = [];
  // formData_CDN = new FormData();

  pictures: any = []
  pictures_info:any[]=[];




  articleForm:any = new FormGroup({
    main_title : new FormControl('test'),
    subtitle_1: new FormControl('subtitle_1'),
    body_1:new FormControl('body_1'),
    subtitle_2: new FormControl('subtitle_2'),
    body_2: new FormControl('body_2'),
    caption: new FormControl('caption'),
    tags: new FormControl('tags'),
  
  })


  constructor(private http: HttpClient) {

    

   }


   ngAfterViewInit(){
    this.main_title.nativeElement.value = 'Testing main';
    this.subtitle_1.nativeElement.value = 'Testing sub1';
    this.body_1.nativeElement.value ='Testing body1';
    this.subtitle_2.nativeElement.value = 'Testing sub2';
    this.body_2.nativeElement.value = 'Testing body 2';
    this.caption.nativeElement.value = 'Testing caption';
    this.tags.nativeElement.value = 'test, example'

    
   }


   

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


    return this.sendForm()  
 
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


    let passcheck = window.prompt('hi');

    if(passcheck!=='b4rabb3ro-71070!'){
      return window.alert('Something went wrong')
    }
    


  
    // console.log(this.articleForm);
    // console.log(this.pictures);


    let formData_backend = new FormData();
    
    


    // More images associated with the same article or other articles...
    //image names extraction
    // this.formData_CDN.forEach((image: any) => {
    //   console.log(image.name, '<--');
    //   images.push({ name: image.name, blog_id: this.blog_id })
    // })
    //tags extaction
    let tags: any[] = this.tags?.nativeElement.value.split(' ')
console.log(this.pictures);
let images:any[]=[];
this.pictures.forEach((image:any)=>{
  images.push({name:image.file.name,position:image.position})
  formData_backend.append(image.file.name, image)
});
    formData_backend.append('main_title', this.main_title?.nativeElement.value);
     formData_backend.append('subtitle_1', this.subtitle_1?.nativeElement.value);
    formData_backend.append('body_1', this.body_1?.nativeElement.value);
    formData_backend.append('subtitle_2', this.subtitle_2?.nativeElement.value);
    formData_backend.append('body_2', this.body_2?.nativeElement.value);
    formData_backend.append('caption', this.caption?.nativeElement.value);
    formData_backend.append('tags', JSON.stringify(tags))
    formData_backend.append('images', JSON.stringify(images))


this.pictures.forEach((image:any)=>{

  formData_backend.append(image.file.position, image.file)
});


    const saveArticle = this.http.post(`${environment.apiUrl_backend}new-article`, formData_backend, {
  
    });
    saveArticle.subscribe((response_backend: any) => {
       console.log(response_backend);
      
      let images: any = [];  
      
      
      //images names stored in array
    //   this.pictures.forEach((media:any) => {
  
    //   media.parent_id = response_backend.id
    // //  images.push({name:media.file.name, position:media.position})
    //     // this.formData_CDN.append('photos', media.file);
  
  
    //   })
      // this.formData_CDN.append('parent_id',response_backend.id)
  
      // console.log(this.formData_CDN);
      
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
      
    //   const headers = {
    //     parent_id:response_backend.id
    //   }
    //   const upload = this.http.post(`${environment.cdn_url}new-article`, this.formData_CDN,{
    //     headers:headers
    //   });
    //   upload
    //   .pipe(map((response_CDN:any)=>{
    //  location.reload()
    //   }))
    //   .subscribe(response_CDN => {
    //     console.log(response_CDN);
    //   });
    });
  }
}


//  articleForm = new FormGroup({
//   main_title : new FormControl('test'),
//   subtitle_1: new FormControl('subtitle_1'),
//   body_1:new FormControl('body_1'),
//   subtitle_2: new FormControl('subtitle_2'),
//   body_2: new FormControl('body_2'),
//   caption: new FormControl('caption'),
//   tags: new FormControl('tags')

// })

// @ViewChild('main_title') main_title: ElementRef | any;
// @ViewChild('subtitle_1') subtitle_1: ElementRef | any;
// @ViewChild('body_1') body_1: ElementRef | any;
// @ViewChild('subtitle_2') subtitle_2: ElementRef | any;
// @ViewChild('body_2') body_2: ElementRef | any;
// @ViewChild('caption') caption: ElementRef | any;
// @ViewChild('tags') tags: ElementRef | any;

// sendForm() {



// }

