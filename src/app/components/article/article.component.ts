import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


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

  
  ngOnInit(): void {
    // /get_article/:id


    const articleID = this.route.snapshot.paramMap.get('id')

    const getArticle = this.http.get(`http://localhost:4300/get_article/${articleID}`);

    getArticle.subscribe((response:any)=>{


      console.log(response);
      

      this.articleData = response;


      // left here, NEXT -->  map images to make them ready for template ;)
    })


  }


}
