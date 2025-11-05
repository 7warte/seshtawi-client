import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router:Router){
    console.log('testtt');
  }

  title = 'web_blog';
  ngOnInit(): void {
  

    

    console.log(window.screen.availWidth);


    this.router.events.forEach((route:any)=>{
      console.log(route);
      
    })
    

  }



  onResize(){
    console.log(window.screen.availWidth);
    
  }



}
