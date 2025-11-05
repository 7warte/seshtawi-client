import { Component } from '@angular/core';

interface BlogArticle  {

  timestamp: Date,
  main_title:string,
  subtitle_1:string,
  body_1:string,
  subtitle_2:string,
  body_2:string,
  caption:string,
  tags:string[]



}


@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss'],
    standalone: false
})



export class DocumentationComponent {






   new_article:BlogArticle = {

    timestamp:new Date('2023-11-21T15:45:00Z'),
    main_title:'Main Title',
    subtitle_1:'subtitle 1',
    body_1: 'body 1',
    subtitle_2:'subtitle_2',
    body_2:'body 2',
    caption:'caption',
    tags:['fornite', 'new year', 'christmas']

  }

  


}
