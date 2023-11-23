import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  constructor(private http:HttpClient){

  }

  ngOnInit(): void {

    this.populateArticles()
  
   



  }


  articles:any[] = 

  []



  populateArticles(){

    this.http.get('http://localhost:4300/fetch_all').pipe(map((response:any)=>{
      console.log(response);

      this.formatter(response);
      
    }),catchError((err, caught) => {

      console.log('error->',err);
      console.log('error->',caught);
      

      return err;
    })).subscribe()
  }



  formatter(articles:any[]){

    let counter = 1;
    let lineCounter = 0;

    
   
console.log(articles[0]);

   

    articles.forEach((article:any,index:number)=>{

      

      if(counter === 14){
        counter =1
      }
      
      article.formatIndex = counter;

      let timestamp = new Date(article.timestamp);

      
      const formattedDate = `${timestamp.getUTCDate()}/${timestamp.getUTCMonth() + 1}/${timestamp.getUTCFullYear()}`;

      article.date = formattedDate
      this.articles.push(article)

 
      counter++





      
    })


    console.log(articles);
    



  }


  

}
