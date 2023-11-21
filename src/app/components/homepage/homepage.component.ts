import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
  
    this.formatter(this.articles)

  }


  articles:any[] = 

  [
{},{},{},{},{},{},{},{},{},{},{},{},
{},{},{},{},{},{},{},{},{},{},{},{},
{},{},{},{},{},{},{},{},{},{},{},{},
{},{},{},{},{},{},{},{},{},{},{},{}
  ]



  formatter(articles:any[]){

    let counter = 1;
    let lineCounter = 0;

    
    var firstLine:number[]=[1,2,3];
    var secondLine:number[]=[4,5,6,7];
    var thirdLine:number[]=[8,9,10];
    var fourthLine:number[]=[11];
    var fifthLine:number[]=[12,13];

    // let formatLine=(index:any)=>{
    //   // console.log(index);
      

    //   // if(firstLine.includes(counter)){
    //   //   return 1

    //   // }
    //   // else if(secondLine.includes(counter)){
    //   //   return 2
    //   // }

    //   // else if(thirdLine.includes(counter)){
    //   //   return 3
    //   // }
    //   // else if(fourthLine.includes(counter)){
    //   //   return 4
    //   // }

    //   // else if(fifthLine.includes(counter)){
    //   //   return 5
    //   // }

    //   // return console.log('error occured with formatting');
      


    // }


    
    


   

    articles.forEach((article:any,index:number)=>{

      if(counter === 14){
        counter =1
      }


      
      article.formatIndex = counter;
      // article.formatLine = formatLine(index)
 
      counter++





      
    })



  }


  

}
