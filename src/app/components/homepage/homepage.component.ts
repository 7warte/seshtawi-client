import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

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

    this.http.get(`${environment.apiUrl_backend_prod}fetch_all`).pipe(map((response:any)=>{
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

    
   

    articles.forEach((article:any,index:number)=>{


      

      const coverImagePath = ()=>{

        console.log(article);
        


        // let coverImage = article.images.find((image:any)=>{  return image.position === "1_A" })


        let coverImage = undefined

        console.warn(coverImage);
        

        if(coverImage){


          console.log(`${environment.cdn_url}/${article.id}/${'coverImage.name'}`);
          
           
          return  `${environment.cdn_url}/${article.id}/${'coverImage.name'}`   
          // return  `${environment.cdn_url}/${article.id}/${coverImage.name}`   

        }else{
          return  `http://localhost:4400/assets/icons/image.svg`  
        }

        
      }


      console.log(coverImagePath());
      


      
      
article.coverImagePath = coverImagePath()
     





      if(counter === 14){
        counter =1
      }
      
      article.formatIndex = counter;

      let timestamp = new Date(article.timestamp);

      
      
      const formattedDate = `${timestamp.getUTCDate()}/${timestamp.getUTCMonth() + 1}/${timestamp.getUTCFullYear()}`;

      article.date = formattedDate

      console.log(article);
      
      this.articles.push(article)

 
      counter++





      
    })


    console.log(articles);
    



  }


  

}
