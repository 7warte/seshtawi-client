import {  Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    host: {
        '(window:resize)': 'onResize($event)'
    },
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'web_blog';
  ngOnInit(): void {
    


    console.log(window.screen.availWidth);

    

  }



  onResize(){
    console.log(window.screen.availWidth);
    
  }



}
