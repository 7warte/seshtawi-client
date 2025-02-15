import { Component,  ElementRef,  Input,  ViewChild, ViewChildren } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    standalone: false
})
export class CarouselComponent {

  @Input() customOptions:OwlOptions;
  // @Input() carouselItems:any[]

  constructor(){
    this.customOptions ={}
    // this.carouselItems =[]
  }



 


//   customOptions: OwlOptions = {
//     loop: true,
//     autoplay:true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: false,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//   }


  carouselItems = [

    {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},

    {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},

    {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},

    {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},

    {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},

    {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},

    {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}

  ];
    



    

 
// }

  // carouselItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
     




}