import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss','./about.component-mobile.scss']
})
export class AboutComponent {


  constructor(private sanitizer: DomSanitizer) {

  }





  @ViewChildren('skills') skills: ElementRef | undefined | any;
  @ViewChildren('sections') sections: any

  @ViewChild('quotesContainer') quotesContainer:any;
  @ViewChildren('quote') quotes:any

  // positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  // position = new FormControl(this.positionOptions[0]);

  ngAfterViewInit() {




    // slide in from left animation in (quotes in section f)

let quotes_observer_options:any ={treshold:1.0,rootMargin:'0px'}
let observer_quotes:any = new IntersectionObserver((entry:any)=>{

  if(entry[0].isIntersecting){
    console.log(this.quotes);
    this.quotes._results.forEach((quote:any,index:number)=>{
      console.log(quote);

   
      setTimeout(() => {
        quote.nativeElement.classList.add('slide-in');
      }, 130*index);
      
      
    })
  }else{
    
    this.quotes._results.forEach((quote:any)=>{
      quote.nativeElement.classList.remove('slide-in')

    })
    
  }

  
  
  
},quotes_observer_options)

console.log(this.quotesContainer.nativeElement);

observer_quotes.observe(this.quotesContainer.nativeElement)




    // lazy loading animation (sections)

    let options = {
      threshold: 0.45 // Adjust this value as needed (0 to 1)
    };



    let observer_sections: any = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {

        let entryClasses = Array.from(entry.target.classList) 
        if(entryClasses.includes('section')&& entryClasses.includes('a')){
          console.log('intersecting section a');
          

      //slide in animation (skills in section a)
      this.skills.forEach((skill: ElementRef, index: number) => {
        let slideInAnimationInterval = setInterval(() => {
          skill.nativeElement.classList.add('slideIn');
          if (index === this.skills.length - 1) {
            clearInterval(slideInAnimationInterval)
          }
        },
          100 * index);
  
      })
          

          

        }

        
        

        if (entry.isIntersecting) {
          entry.target.classList.add('show')


        }

      })

    }, options)



    this.sections.forEach((section: any) => {
      observer_sections.observe(section.nativeElement)
    })






  }

  shield: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#128737;`)
  scale: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#9878;`)
  cross: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#10012;`)
  arrow: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#10166;`)
  sun : SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#9728;`)
  chess_tower :SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`&#9787`)




  mrMeeseeksCodeSnippet: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`<br/><br/><br/>
    <span style="color: #66d9ef;">class</span> <span style="color: #a6e22e;">MrMeeseeks</span> { <br/>
      <span style="color: #66d9ef;">constructor</span>(<span style="color: #a6e22e;">task</span>) {
        <span style="color: #f8f8f2;">console</span>.<span style="color: #66d9ef;">log</span>(<span style="color: #e6db74;">"I am Mr. Meeseeks"</span>);
        <span style="color: #f8f8f2;">console</span>.<span style="color: #66d9ef;">log</span>(<span style="color: #e6db74;">"Look at me"</span>);

        <span style="color: #66d9ef;">while</span> (<span style="color: #f92672;">!</span><span style="color: #a6e22e;">task</span>.<span style="color: #f8f8f2;">completed</span>) {
          <span style="color: #f8f8f2;">this</span>.<span style="color: #66d9ef;">solve</span>(<span style="color: #a6e22e;">task</span>);
        }

        <span style="color: #66d9ef;">if</span> (<span style="color: #a6e22e;">task</span>.<span style="color: #f8f8f2;">completed</span>) {
          <span style="color: #f8f8f2;">this</span>.<span style="color: #66d9ef;">stopExisting</span>();
        } <span style="color: #66d9ef;">else</span> {
          <span style="color: #66d9ef;">const</span> <span style="color: #a6e22e;">aux</span> = <span style="color: #66d9ef;">new</span> <span style="color: #a6e22e;">MrMeeseeks</span>(<span style="color: #a6e22e;">task</span>);
          <span style="color: #f8f8f2;">this</span>.<span style="color: #66d9ef;">getMad</span>();
          <span style="color: #75715e;">// existence is pain</span>
        }
      }

      }
    }
  `);





}
