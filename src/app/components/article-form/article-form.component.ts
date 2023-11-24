import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {


  @ViewChild('main_title') main_title: ElementRef |undefined;
  @ViewChild('subtitle_1') subtitle_1: ElementRef |undefined;
  @ViewChild('body_1') body_1: ElementRef |undefined;
  @ViewChild('subtitle_2') subtitle_2: ElementRef |undefined;
  @ViewChild('body_2') body_2: ElementRef | undefined;
  @ViewChild('caption') caption: ElementRef |undefined;

  fileName = '';
  
  missingFields:any[]=[];


  
  formData = new FormData();


  pictures: any[] = []

  constructor(private http: HttpClient) { }


  validationObject:any = {
    images:{
      "1_A":false,
      "1B":false,
      "2B":false,
      "3B":false,
      "1C":false

    },

    texts:{

      "main_title":false,
      "subtitle_1":false,
      "body_1":false, 
      "subtitle_2":false,
      "body_2":false,
      "caption":false

    }

  

      

  }


formValidation(){

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



    if(textsFilled === true && imagesFilled){
      window.alert('Send request, all the field are filled')
    }
  else{

    let falseProperties = []
    let texts = this.validationObject.texts
    let images = this.validationObject.images

  for (const key in this.validationObject.texts){

    if(texts.hasOwnProperty(key) && texts[key] === false ){

        falseProperties.push(key)

    }
  }



  for ( const key in images){


    if(images.hasOwnProperty(key) && images[key]===false){

      falseProperties.push(key)

    }
  }


  console.log(falseProperties)

    }



  



}


  onFileSelected(event: any, inputName:any) {



// validation 
this.validationObject.images[inputName] = true;




  
    const file: any = event.target.files[0];
    this.pictures.push(file);
    console.log(this.pictures);
  }


  onTextInput(textAreaRef:any){


    //validation
   this.validationObject.texts[textAreaRef.name] = true;



  }



  sendForm() {
    // this.formData.append("thumbnail", 'file'); // Not sure what this line does, check if it's needed
    console.log(this.formData);
    console.log(this.formData);


    this.formValidation()


   this.formData.append('main_title', this.main_title?.nativeElement.value)

console.log(this.main_title?.nativeElement.value);


    this.pictures.forEach((pic) => {
      this.formData.append('photos', pic);
    })



    console.log(this.formData);
    
    console.log(this.formData);
    const upload$ = this.http.post("http://localhost:4400/image-upload", this.formData, {
   
    });
    upload$.subscribe();
  }
}


