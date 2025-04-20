import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss', './about.component-mobile.scss'],
    standalone: false
})
export class AboutComponent {


  constructor(
    private router:Router,
    private sanitizer: DomSanitizer) {

  }



 @ViewChildren('banner') banners:HTMLElement | any
  @ViewChildren('skills') skills: ElementRef | undefined | any;
  @ViewChildren('sections') sections: any

  @ViewChild('quotesContainer') quotesContainer:any;
  @ViewChildren('quote') quotes:any

  // positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  // position = new FormControl(this.positionOptions[0]);

  ngAfterViewInit() {

    let options = {
      threshold: 0.45 // Adjust this value as needed (0 to 1)
    };


    console.log('ngAfterViewInit');


    let observer_sections: any = new IntersectionObserver((entries: any) => {
      entries.forEach((entry: any) => {
        console.log(entry);

        let entryClasses = Array.from(entry.target.classList)
        if(entryClasses.includes('section')&& entryClasses.includes('a')){
          console.log('intersecting section a');
          console.log(this.skills);
      //slide in animation (skills in section a)
      this.skills?.forEach((skill: ElementRef, index: number) => {
        let slideInAnimationInterval = setInterval(() => {

          skill.nativeElement.classList.add('slideIn');
          if (index === this.skills.length - 1) {
            clearInterval(slideInAnimationInterval)
            console.log('index === this.skills.length - 1 ->true');

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


  navigationBanners = [
    {name:'My code' ,active:true,path:'code'},
    {name:'My articles ' ,active:true,path:'articles'},
    {name:'My shots' ,active :true,path:'shots'}

  ]

  resetBannerActiveState(){

    this.navigationBanners.forEach((banner:any)=>{
      banner.active = true
    })

  }

  navigateTo(route:string){
    console.log(route);

    this.router.navigate([route])


  }

  opacityOnSibiling_effect(bannerIndex:any){

    console.log(bannerIndex);
    this.navigationBanners.forEach((banner:any,index:number)=>{
      if(bannerIndex !== index){
        banner.active = false
      }else{
        banner.active =true
      }
    });

    console.log(this.navigationBanners);
  }




}
