import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  constructor(
    private route:ActivatedRoute,
    private http:HttpClient){


  }

  articleData:any=null;
  articleMedia:any={};

  
// slides = [

//   {id: 1, img: "assets/products-carousel-media/adomas-aleno-E20nTXEAUrs-unsplash.jpg"},

//   {id: 2, img: "assets/products-carousel-media/austin-distel-qgdJX9mvMJI-unsplash.jpg"},

//   {id: 3, img: "assets/products-carousel-media/christina-wocintechchat-com-e6wu8EiFUB0-unsplash.jpg"},

//   {id: 4, img: "assets/products-carousel-media/christina-wocintechchat-com-7VmGD9XkYOU-unsplash.jpg"},

//   {id: 5, img: "assets/products-carousel-media/kateryna-hliznitsova-MJXMIn6DoNc-unsplash.jpg"},

//   {id: 6, img: "assets/products-carousel-media/oluwakemi-solaja-ZN52ZBFkw4Y-unsplash.jpg"},


// ];


  carouselSettings: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    margin:10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  

  
  ngOnInit(): void {
    // /get_article/:id


    


    const articleID = this.route.snapshot.paramMap.get('id')

    const getArticle = this.http.get(`${environment.apiUrl_backend_prod}get_article/${articleID}`);

    getArticle.subscribe((response:any)=>{


      console.log(response);
      

      this.articleData = response;

      response.images.forEach((img:{name:string, position:string})=>{

        this.articleMedia[img.position] = img.name

      })

      


    })


  }


}
